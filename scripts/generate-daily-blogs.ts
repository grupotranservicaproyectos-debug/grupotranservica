#!/usr/bin/env tsx

/**
 * Script para generación automática diaria de blogs SEO
 * Ejecutado por Replit Scheduled Deployment
 * 
 * Configuración:
 * - Hora: 6:30 AM
 * - Zona horaria: America/Panama
 * - Cron: 30 6 * * *
 * - Timeout: 300 segundos
 * 
 * Uso: tsx scripts/generate-daily-blogs.ts
 */

import { drizzle } from 'drizzle-orm/neon-serverless';
import { Pool, neonConfig } from '@neondatabase/serverless';
import { eq, and, desc, sql } from 'drizzle-orm';
import ws from 'ws';
import { generate5Blogs } from '../server/lib/blogGenerator.js';
import * as schema from '../shared/schema.js';

neonConfig.webSocketConstructor = ws;

interface LogEntry {
  timestamp: string;
  level: 'INFO' | 'WARN' | 'ERROR' | 'DEBUG';
  event: string;
  data?: Record<string, unknown>;
}

interface GenerationStats {
  batchId: string;
  startTime: Date;
  blogsGenerated: number;
  blogsSkipped: number;
  aiCallsCount: number;
  imageCallsCount: number;
  errors: string[];
  citiesUsed: string[];
  sectorsUsed: string[];
}

const BLOGS_PER_DAY = 4;
const MIN_CONTENT_LENGTH = 1500;
const MAX_CITY_SECTOR_USES_PER_MONTH = 3;

function log(entry: LogEntry): void {
  console.log(JSON.stringify({
    ...entry,
    timestamp: entry.timestamp || new Date().toISOString(),
  }));
}

function generateBatchId(): string {
  const date = new Date().toISOString().split('T')[0].replace(/-/g, '');
  const random = Math.random().toString(36).substring(2, 8);
  return `batch_${date}_${random}`;
}

function getCurrentMonthYear(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
}

async function checkCooldown(
  db: ReturnType<typeof drizzle>,
  city: string,
  sector: string
): Promise<boolean> {
  const monthYear = getCurrentMonthYear();
  
  const existing = await db
    .select()
    .from(schema.citySectorCooldown)
    .where(
      and(
        eq(schema.citySectorCooldown.city, city),
        eq(schema.citySectorCooldown.sector, sector),
        eq(schema.citySectorCooldown.monthYear, monthYear)
      )
    )
    .limit(1);
  
  if (existing.length === 0) {
    return true;
  }
  
  return existing[0].usageCount < MAX_CITY_SECTOR_USES_PER_MONTH;
}

async function updateCooldown(
  db: ReturnType<typeof drizzle>,
  city: string,
  sector: string
): Promise<void> {
  const monthYear = getCurrentMonthYear();
  
  const existing = await db
    .select()
    .from(schema.citySectorCooldown)
    .where(
      and(
        eq(schema.citySectorCooldown.city, city),
        eq(schema.citySectorCooldown.sector, sector),
        eq(schema.citySectorCooldown.monthYear, monthYear)
      )
    )
    .limit(1);
  
  if (existing.length === 0) {
    await db.insert(schema.citySectorCooldown).values({
      city,
      sector,
      monthYear,
      usageCount: 1,
      lastUsedAt: new Date(),
    });
  } else {
    await db
      .update(schema.citySectorCooldown)
      .set({
        usageCount: existing[0].usageCount + 1,
        lastUsedAt: new Date(),
      })
      .where(eq(schema.citySectorCooldown.id, existing[0].id));
  }
}

async function checkDuplicateTitle(
  db: ReturnType<typeof drizzle>,
  title: string
): Promise<boolean> {
  const existing = await db
    .select({ id: schema.blogs.id })
    .from(schema.blogs)
    .where(eq(schema.blogs.title, title))
    .limit(1);
  
  return existing.length > 0;
}

async function checkDuplicateSlug(
  db: ReturnType<typeof drizzle>,
  slug: string
): Promise<boolean> {
  const existing = await db
    .select({ id: schema.blogs.id })
    .from(schema.blogs)
    .where(eq(schema.blogs.slug, slug))
    .limit(1);
  
  return existing.length > 0;
}

function validateContentLength(content: string): boolean {
  const textContent = content.replace(/<[^>]*>/g, '').trim();
  return textContent.length >= MIN_CONTENT_LENGTH;
}

async function saveGenerationLog(
  db: ReturnType<typeof drizzle>,
  stats: GenerationStats,
  status: 'completed' | 'partial' | 'failed'
): Promise<void> {
  const executionTimeMs = new Date().getTime() - stats.startTime.getTime();
  
  await db.insert(schema.blogGenerationLogs).values({
    batchId: stats.batchId,
    executionDate: stats.startTime,
    blogsGenerated: stats.blogsGenerated,
    blogsSkipped: stats.blogsSkipped,
    executionTimeMs,
    aiCallsCount: stats.aiCallsCount,
    imageCallsCount: stats.imageCallsCount,
    errors: stats.errors.length > 0 ? stats.errors : null,
    citiesUsed: stats.citiesUsed,
    sectorsUsed: stats.sectorsUsed,
    status,
    source: 'scheduled',
  });
}

async function main() {
  const stats: GenerationStats = {
    batchId: generateBatchId(),
    startTime: new Date(),
    blogsGenerated: 0,
    blogsSkipped: 0,
    aiCallsCount: 0,
    imageCallsCount: 0,
    errors: [],
    citiesUsed: [],
    sectorsUsed: [],
  };

  log({
    timestamp: stats.startTime.toISOString(),
    level: 'INFO',
    event: 'generation_started',
    data: {
      batchId: stats.batchId,
      targetBlogs: BLOGS_PER_DAY,
      timezone: 'America/Panama',
      scheduleTime: '6:30 AM',
      cron: '30 6 * * *',
    },
  });

  let pool: Pool | null = null;
  let db: ReturnType<typeof drizzle> | null = null;

  try {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error('DATABASE_URL no está configurado');
    }

    pool = new Pool({ connectionString });
    db = drizzle(pool, { schema });

    log({
      timestamp: new Date().toISOString(),
      level: 'INFO',
      event: 'database_connected',
      data: { batchId: stats.batchId },
    });

    log({
      timestamp: new Date().toISOString(),
      level: 'INFO',
      event: 'generating_blogs',
      data: { count: BLOGS_PER_DAY, batchId: stats.batchId },
    });

    const blogs = await generate5Blogs(BLOGS_PER_DAY);
    stats.aiCallsCount = blogs.length;
    stats.imageCallsCount = blogs.length * 3;

    log({
      timestamp: new Date().toISOString(),
      level: 'INFO',
      event: 'blogs_generated_by_ai',
      data: { count: blogs.length, batchId: stats.batchId },
    });

    const createdBlogs: typeof schema.blogs.$inferSelect[] = [];

    for (const blog of blogs) {
      const city = blog.city || 'Venezuela';
      const sector = blog.sector || 'General';

      if (!validateContentLength(blog.content)) {
        stats.blogsSkipped++;
        stats.errors.push(`Content too short for: ${blog.title}`);
        log({
          timestamp: new Date().toISOString(),
          level: 'WARN',
          event: 'blog_skipped_short_content',
          data: { title: blog.title, slug: blog.slug },
        });
        continue;
      }

      const isDuplicateTitle = await checkDuplicateTitle(db, blog.title);
      if (isDuplicateTitle) {
        stats.blogsSkipped++;
        stats.errors.push(`Duplicate title: ${blog.title}`);
        log({
          timestamp: new Date().toISOString(),
          level: 'WARN',
          event: 'blog_skipped_duplicate_title',
          data: { title: blog.title },
        });
        continue;
      }

      const isDuplicateSlug = await checkDuplicateSlug(db, blog.slug);
      if (isDuplicateSlug) {
        const newSlug = `${blog.slug}-${Date.now()}`;
        blog.slug = newSlug;
        log({
          timestamp: new Date().toISOString(),
          level: 'INFO',
          event: 'slug_modified_to_avoid_duplicate',
          data: { originalSlug: blog.slug, newSlug },
        });
      }

      const canUseCitySector = await checkCooldown(db, city, sector);
      if (!canUseCitySector) {
        stats.blogsSkipped++;
        stats.errors.push(`Cooldown active for: ${city}/${sector}`);
        log({
          timestamp: new Date().toISOString(),
          level: 'WARN',
          event: 'blog_skipped_cooldown',
          data: { city, sector },
        });
        continue;
      }

      const blogWithBatch = {
        ...blog,
        generationBatchId: stats.batchId,
        generationSource: 'scheduled_6:30_AM_Panama',
        autoGenerated: 'true',
      };

      try {
        const [created] = await db.insert(schema.blogs).values(blogWithBatch).returning();
        createdBlogs.push(created);
        stats.blogsGenerated++;

        await updateCooldown(db, city, sector);

        if (!stats.citiesUsed.includes(city)) stats.citiesUsed.push(city);
        if (!stats.sectorsUsed.includes(sector)) stats.sectorsUsed.push(sector);

        log({
          timestamp: new Date().toISOString(),
          level: 'INFO',
          event: 'blog_saved',
          data: {
            id: created.id,
            title: created.title,
            slug: created.slug,
            city,
            sector,
            batchId: stats.batchId,
          },
        });
      } catch (error) {
        stats.errors.push(`Failed to save: ${blog.title} - ${error instanceof Error ? error.message : 'Unknown error'}`);
        log({
          timestamp: new Date().toISOString(),
          level: 'ERROR',
          event: 'blog_save_failed',
          data: {
            title: blog.title,
            error: error instanceof Error ? error.message : 'Unknown error',
          },
        });
      }
    }

    const status = stats.blogsGenerated === 0 
      ? 'failed' 
      : stats.blogsGenerated < BLOGS_PER_DAY 
        ? 'partial' 
        : 'completed';

    await saveGenerationLog(db, stats, status);

    const executionTimeMs = new Date().getTime() - stats.startTime.getTime();

    log({
      timestamp: new Date().toISOString(),
      level: 'INFO',
      event: 'generation_completed',
      data: {
        batchId: stats.batchId,
        status,
        blogsGenerated: stats.blogsGenerated,
        blogsSkipped: stats.blogsSkipped,
        aiCallsCount: stats.aiCallsCount,
        imageCallsCount: stats.imageCallsCount,
        citiesUsed: stats.citiesUsed,
        sectorsUsed: stats.sectorsUsed,
        executionTimeMs,
        executionTimeSeconds: Math.round(executionTimeMs / 1000),
        errorsCount: stats.errors.length,
      },
    });

    console.log('\n========== RESUMEN DE GENERACIÓN ==========');
    console.log(`Batch ID: ${stats.batchId}`);
    console.log(`Estado: ${status.toUpperCase()}`);
    console.log(`Blogs generados: ${stats.blogsGenerated}/${BLOGS_PER_DAY}`);
    console.log(`Blogs omitidos: ${stats.blogsSkipped}`);
    console.log(`Tiempo de ejecución: ${Math.round(executionTimeMs / 1000)}s`);
    console.log(`Ciudades: ${stats.citiesUsed.join(', ') || 'N/A'}`);
    console.log(`Sectores: ${stats.sectorsUsed.join(', ') || 'N/A'}`);
    if (stats.errors.length > 0) {
      console.log(`Errores: ${stats.errors.length}`);
      stats.errors.forEach((e, i) => console.log(`  ${i + 1}. ${e}`));
    }
    console.log('============================================\n');

    await pool.end();

    if (stats.blogsGenerated === 0) {
      process.exit(1);
    }
    process.exit(0);

  } catch (error) {
    stats.errors.push(error instanceof Error ? error.message : 'Unknown error');

    log({
      timestamp: new Date().toISOString(),
      level: 'ERROR',
      event: 'generation_failed',
      data: {
        batchId: stats.batchId,
        error: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : 'N/A',
      },
    });

    if (db) {
      try {
        await saveGenerationLog(db, stats, 'failed');
      } catch (logError) {
        console.error('Failed to save generation log:', logError);
      }
    }

    if (pool) {
      await pool.end();
    }

    process.exit(1);
  }
}

main();
