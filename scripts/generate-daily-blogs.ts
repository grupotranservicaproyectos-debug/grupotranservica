#!/usr/bin/env tsx

/**
 * Script para generación automática diaria de blogs SEO
 * Ejecutado por Replit Scheduled Deployment
 * 
 * Uso: tsx scripts/generate-daily-blogs.ts
 */

import { drizzle } from 'drizzle-orm/neon-serverless';
import { Pool, neonConfig } from '@neondatabase/serverless';
import ws from 'ws';
import { generate5Blogs } from '../server/lib/blogGenerator.js';
import * as schema from '../shared/schema.js';

neonConfig.webSocketConstructor = ws;

async function main() {
  console.log('🚀 Iniciando generación automática de blogs SEO...');
  console.log(`📅 Fecha: ${new Date().toLocaleString('es-VE', { timeZone: 'America/Caracas' })}`);
  console.log('⏰ Zona horaria: America/Caracas (Venezuela)\n');

  try {
    // Conectar a la base de datos
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error('❌ DATABASE_URL no está configurado');
    }

    const pool = new Pool({ connectionString });
    const db = drizzle(pool, { schema });
    console.log('✅ Conexión a base de datos establecida\n');

    // Generar 5 blogs SEO
    console.log('🤖 Generando 5 blogs SEO optimizados...');
    const blogs = await generate5Blogs();
    console.log(`✅ ${blogs.length} blogs generados exitosamente\n`);

    // Guardar en base de datos
    console.log('💾 Guardando blogs en base de datos...');
    const createdBlogs = [];
    
    for (const blog of blogs) {
      const [created] = await db.insert(schema.blogs).values(blog).returning();
      createdBlogs.push(created);
    }

    console.log(`✅ ${createdBlogs.length} blogs guardados exitosamente\n`);
    
    // Mostrar resumen
    console.log('📝 Blogs creados:');
    createdBlogs.forEach((blog, index) => {
      console.log(`   ${index + 1}. ${blog.title} (${blog.slug})`);
      console.log(`      Idioma: ${blog.language} | Imágenes: ${blog.images.length}`);
    });

    console.log('\n✨ Generación automática completada exitosamente');
    
    await pool.end();
    process.exit(0);

  } catch (error) {
    console.error('\n❌ Error en generación automática de blogs:', error);
    console.error('Stack trace:', error instanceof Error ? error.stack : 'N/A');
    process.exit(1);
  }
}

main();
