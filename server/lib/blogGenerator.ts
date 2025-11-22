import { CITIES, SECTORS } from './seoKeywords';
import { getBlogImages } from './imageService';
import type { InsertBlog } from '@shared/schema';

interface BlogTemplate {
  name: string;
  titleTemplates: string[];
  slugPatterns: string[];
  outline: string[];
  keywords: string[];
}

const TEMPLATES: BlogTemplate[] = [
  {
    name: 'CityGuide',
    titleTemplates: [
      'Transporte de Carga {sector} en {city}: Guía Completa 2025',
      'Logística {sector} en {city}: Servicios y Contacto',
      '{city}: Centro de Logística para el Sector {sector}',
    ],
    slugPatterns: [
      'transporte-{sector}-{city}',
      'logistica-{sector}-{city}',
    ],
    outline: [
      'Introducción: {city} como hub de {sector}',
      'Desafíos logísticos específicos en {city}',
      'Soluciones Grupo Transervica para el sector {sector}',
      'Casos de éxito en {city}',
      'Capacidades de transporte (100-500 toneladas)',
      'Contacto y cotización gratuita',
    ],
    keywords: [
      'transporte {sector} {city}',
      'logística {sector} {city}',
      'carga pesada {city}',
      'empresa transporte {city}',
    ],
  },
  {
    name: 'PriceGuide',
    titleTemplates: [
      '¿Cuánto cuesta el transporte en {city}? Precios 2025',
      'Tarifas de transporte {sector} en {city}',
      'Presupuesto de logística en {city}: Cálculo exacto',
    ],
    slugPatterns: [
      'precio-transporte-{city}',
      'tarifas-{sector}-{city}',
    ],
    outline: [
      'Factores que afectan los precios de transporte',
      'Tabla de tarifas por kilómetro',
      'Cálculo de presupuesto automático',
      'Descuentos por volumen',
      'Formas de pago disponibles',
    ],
    keywords: [
      'precio transporte {city}',
      'tarifa {sector} {city}',
      'presupuesto logística',
      'cotización transporte',
    ],
  },
  {
    name: 'ServiceHighlight',
    titleTemplates: [
      'Lowboy en {city}: Transporte de 100-500 toneladas',
      'Almacenamiento industrial en {city}',
      'Consultoría logística: Optimiza tu operación',
    ],
    slugPatterns: [
      'lowboy-{city}',
      'almacenamiento-{city}',
      'consultoria-{city}',
    ],
    outline: [
      'Descripción del servicio',
      'Ventajas principales',
      'Especificaciones técnicas',
      'Casos de uso en {city}',
      'Cómo solicitar el servicio',
    ],
    keywords: [
      'lowboy {city}',
      'almacenamiento industrial',
      'consultoría logística',
    ],
  },
  {
    name: 'SectorDeep',
    titleTemplates: [
      'Logística {sector}: Soluciones especializadas 2025',
      'Sector {sector} en Venezuela: Oportunidades',
      'Transporte {sector}: Regulaciones y mejores prácticas',
    ],
    slugPatterns: [
      'logistica-{sector}',
      'sector-{sector}-venezuela',
    ],
    outline: [
      'Características del sector {sector}',
      'Desafíos específicos del transporte',
      'Requisitos regulatorios',
      'Soluciones adaptadas de Grupo Transervica',
      'Experiencia en el sector',
    ],
    keywords: [
      'logística {sector}',
      'transporte {sector} venezuela',
      '{sector} especializado',
    ],
  },
  {
    name: 'CaseStudy',
    titleTemplates: [
      'Caso de éxito: Transporte {sector} en {city}',
      'Proyecto: Movilización exitosa en {city}',
      'Testimonio: Cómo transportamos carga crítica',
    ],
    slugPatterns: [
      'caso-exito-{sector}-{city}',
      'proyecto-{city}',
    ],
    outline: [
      'Presentación del proyecto',
      'Desafío específico enfrentado',
      'Solución propuesta por Transervica',
      'Resultados obtenidos',
      'Testimonial del cliente',
    ],
    keywords: [
      'transporte exitoso {city}',
      'logística profesional',
      'carga pesada especializada',
    ],
  },
];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

async function generateBlogContent(
  template: BlogTemplate,
  city: string,
  sector: string
): Promise<{
  title: string;
  slug: string;
  content: string;
  metaDescription: string;
  keywords: string[];
}> {
  const titleTemplate = template.titleTemplates[
    Math.floor(Math.random() * template.titleTemplates.length)
  ];
  const slugPattern = template.slugPatterns[
    Math.floor(Math.random() * template.slugPatterns.length)
  ];

  const title = titleTemplate
    .replace(/{sector}/g, sector)
    .replace(/{city}/g, city);

  const slug = slugPattern
    .replace(/{sector}/g, slugify(sector))
    .replace(/{city}/g, slugify(city));

  const keywords = template.keywords.map((kw) =>
    kw.replace(/{sector}/g, sector).replace(/{city}/g, city)
  );

  const prompt = `
Escribe un artículo de blog profesional para una empresa de transporte de carga pesada (Grupo Transervica, C.A.) en Venezuela.

TÍTULO: ${title}
PALABRAS CLAVE: ${keywords.join(', ')}

REQUERIMIENTOS OBLIGATORIOS:
1. Extensión: 700-900 palabras
2. Optimizado para SEO (keywords naturalmente integradas)
3. Estructura: H2 y H3 claros con jerarquía lógica
4. Tono: Profesional, B2B, informativo pero persuasivo
5. HTML simple (solo <h2>, <h3>, <p>, <ul>, <li>, <strong>)
6. INCLUIR EXACTAMENTE 3 LLAMADAS A ACCIÓN (CTAs):
   - CTA #1: Al inicio del artículo (después de la introducción)
   - CTA #2: En el medio del contenido
   - CTA #3: Al final del artículo
   
Formato de los CTAs (usar exactamente este HTML):
<div class="cta-box">
<p><strong>💼 ¿Necesita transporte especializado en ${city}?</strong></p>
<p>Contáctenos ahora: <a href="tel:+584226361047">+58 422-6361047</a> | <a href="https://wa.me/message/WAKKACM55ESHC1" target="_blank">WhatsApp</a></p>
</div>

OUTLINE:
${template.outline.map((item) => `- ${item.replace(/{sector}/g, sector).replace(/{city}/g, city)}`).join('\n')}

CONTEXTO EMPRESA:
- Empresa: Grupo Transervica, C.A.
- Ciudad: ${city}
- Sector industrial: ${sector}
- Servicios principales: Transporte 100-500 toneladas, Lowboy, Grúas móviles 25-800 ton, Almacenamiento, Consultoría
- Experiencia: 40 años en Venezuela
- Contacto: +58 422-6361047
- WhatsApp: https://wa.me/message/WAKKACM55ESHC1
- Email comercial: direccioncomercialtvc@grupotranservica.com
- Email ejecutivo: direccionejecutivatvc@grupotranservica.com

MENCIONES OBLIGATORIAS (incluir naturalmente cuando sea relevante):
- Si sector petrolero/energético: mencionar PDVSA (principal cliente del sector)
- Si sector minero/siderúrgico: mencionar CVG (Corporación Venezolana de Guayana)
- Si sector petroquímico: mencionar Pequiven

IMPORTANTE: No incluyas tags <html>, <head> o <body>. Solo el contenido del artículo con los 3 CTAs insertados estratégicamente.
`;

  try {
    const apiKey = process.env.OPENROUTER_API_KEY;
    
    if (!apiKey) {
      throw new Error('OPENROUTER_API_KEY not configured');
    }

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://grupotranservica.com',
        'X-Title': 'Grupo Transervica Blog Generator',
      },
      body: JSON.stringify({
        model: 'deepseek/deepseek-chat',
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 2000,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('OpenRouter API error:', response.status, response.statusText, errorData);
      throw new Error(`OpenRouter API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const content = data.choices[0]?.message?.content || '';
    
    if (!content) {
      throw new Error('Empty content from OpenRouter API');
    }
    
    const metaDescription = content
      .replace(/<[^>]*>/g, '')
      .substring(0, 155)
      .trim();

    console.log(`✅ Blog content generated successfully using OpenRouter API for: ${title}`);

    return {
      title,
      slug,
      content,
      metaDescription,
      keywords,
    };
  } catch (error) {
    console.error('⚠️  Error generating blog content with OpenRouter, using fallback:', error);
    
    const fallbackContent = `
<h2>Introducción</h2>
<p>Grupo Transervica, C.A. ofrece servicios especializados de transporte de carga pesada en ${city} para el sector ${sector}. Con 40 años de experiencia, somos líderes en logística industrial en Venezuela.</p>

<div class="cta-box">
<p><strong>💼 ¿Necesita transporte especializado en ${city}?</strong></p>
<p>Contáctenos ahora: <a href="tel:+584226361047">+58 422-6361047</a> | <a href="https://wa.me/message/WAKKACM55ESHC1" target="_blank">WhatsApp</a></p>
</div>

<h2>Nuestros Servicios en ${city}</h2>
<ul>
<li>Transporte de carga pesada de 100 a 500 toneladas</li>
<li>Lowboy y camas bajas especializadas</li>
<li>Grúas móviles de 25 a 800 toneladas</li>
<li>Almacenamiento industrial seguro</li>
<li>Consultoría logística profesional</li>
</ul>

<h2>Experiencia en el Sector ${sector}</h2>
<p>Nuestro equipo cuenta con amplia experiencia en el transporte especializado para el sector ${sector}, garantizando la movilización segura y eficiente de sus cargas. Trabajamos con principales empresas como PDVSA, CVG y Pequiven.</p>

<div class="cta-box">
<p><strong>💼 ¿Necesita transporte especializado en ${city}?</strong></p>
<p>Contáctenos ahora: <a href="tel:+584226361047">+58 422-6361047</a> | <a href="https://wa.me/message/WAKKACM55ESHC1" target="_blank">WhatsApp</a></p>
</div>

<h2>Contacto y Cotización</h2>
<p>Para solicitar una cotización gratuita, contáctenos al +58 422-6361047 o por WhatsApp. También puede escribirnos a direccioncomercialtvc@grupotranservica.com o direccionejecutivatvc@grupotranservica.com. Estamos listos para atender sus necesidades de transporte en ${city}.</p>

<div class="cta-box">
<p><strong>💼 ¿Necesita transporte especializado en ${city}?</strong></p>
<p>Contáctenos ahora: <a href="tel:+584226361047">+58 422-6361047</a> | <a href="https://wa.me/message/WAKKACM55ESHC1" target="_blank">WhatsApp</a></p>
</div>
`;

    return {
      title,
      slug,
      content: fallbackContent,
      metaDescription: `Transporte de carga pesada en ${city} para el sector ${sector}. Grupo Transervica ofrece servicios especializados con 40 años de experiencia.`,
      keywords,
    };
  }
}

export async function generateBlog(): Promise<InsertBlog> {
  const template = TEMPLATES[Math.floor(Math.random() * TEMPLATES.length)];
  const city = CITIES[Math.floor(Math.random() * CITIES.length)];
  const sector = SECTORS[Math.floor(Math.random() * SECTORS.length)];

  const { title, slug, content, metaDescription, keywords } = await generateBlogContent(
    template,
    city,
    sector
  );

  console.log(`🖼️  Buscando imágenes para: ${sector} ${city}...`);
  const { coverImage, secondaryImages } = await getBlogImages(city, sector);
  
  if (!coverImage || !secondaryImages || secondaryImages.length < 2) {
    throw new Error('Failed to generate required minimum 3 images for blog');
  }

  const ctaCount = (content.match(/class="cta-box"/g) || []).length;
  if (ctaCount < 3) {
    console.warn(`⚠️  Blog generated with only ${ctaCount} CTAs (required: 3)`);
  }

  return {
    title,
    slug,
    content,
    excerpt: metaDescription.substring(0, 200),
    metaTitle: title,
    metaDescription,
    keywords,
    city: slugify(city),
    sector: slugify(sector),
    template: template.name,
    coverImage,
    secondaryImages,
    ogImage: coverImage,
    published: 'true',
    autoGenerated: 'true',
  };
}

export async function generate5Blogs(): Promise<InsertBlog[]> {
  console.log('🤖 Generando 5 blogs automáticamente...');
  const blogs: InsertBlog[] = [];

  for (let i = 0; i < 5; i++) {
    try {
      const blog = await generateBlog();
      blogs.push(blog);
      console.log(`✅ Blog ${i + 1}/5 generado: "${blog.title}"`);
      
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (error) {
      console.error(`❌ Error generando blog ${i + 1}:`, error);
    }
  }

  console.log(`✅ Generación completada: ${blogs.length} blogs creados`);
  return blogs;
}
