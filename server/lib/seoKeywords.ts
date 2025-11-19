export const CITIES = [
  'Caracas',
  'Maracaibo',
  'Valencia',
  'Barcelona',
  'Puerto Ordaz',
  'Puerto Cabello',
  'Barquisimeto',
  'Punto Fijo',
];

export const SECTORS = [
  'Petrolero',
  'Petroquímico',
  'Siderúrgico',
  'Energético',
  'Portuario',
  'Manufacturero',
];

export const SEO_KEYWORDS = {
  tier1: [
    'transporte carga pesada venezuela',
    'logística industrial venezuela',
    'transporte sobredimensionado venezuela',
    'empresa transporte pesado venezuela',
    'logística especializada venezuela',
    'transporte de cargas excepcionales',
    'servicios transporte industrial',
    'logística y transporte venezuela',
    'transporte de carga venezuela',
    'empresa logística venezuela',
  ],

  caracas: [
    'transporte carga pesada caracas',
    'logística industrial caracas',
    'empresa transporte caracas',
    'servicios logística caracas',
    'carga pesada distrito capital',
    'lowboy caracas',
    'almacenamiento caracas',
    'consultoría logística caracas',
  ],
  
  maracaibo: [
    'transporte carga pesada maracaibo',
    'logística industrial zulia',
    'empresa transporte zulia',
    'servicios carga maracaibo',
    'transporte pesado zulia',
    'lowboy maracaibo',
    'almacenamiento maracaibo',
    'consultoría zulia',
  ],
  
  valencia: [
    'transporte carga pesada valencia',
    'logística industrial valencia',
    'empresa transporte carabobo',
    'servicios logística valencia',
    'carga pesada carabobo',
    'lowboy valencia',
    'almacenamiento valencia',
    'consultoría carabobo',
  ],
  
  barcelona: [
    'transporte carga pesada barcelona',
    'logística industrial anzoátegui',
    'empresa transporte barcelona',
    'servicios carga barcelona',
    'logística anzoátegui',
    'lowboy barcelona',
    'almacenamiento barcelona',
    'consultoría anzoátegui',
  ],

  petrolero: [
    'transporte petrolero venezuela',
    'logística pdvsa',
    'transporte equipos petrolero',
    'carga pesada sector petrolero',
    'movilización equipos petrolero',
    'transporte contratistas petrolero',
    'logística mixtas petrolero',
    'carga crítica petrolero',
  ],
  
  petroquimico: [
    'transporte petroquímico venezuela',
    'logística petroquímica',
    'transporte pequiven',
    'carga complejo criogénico',
    'equipos petroquímicos',
    'movilización petroquímica',
    'logística petroquímica venezuela',
    'carga petroquímica',
  ],
  
  siderurgico: [
    'transporte siderúrgico venezuela',
    'logística sidor',
    'transporte acero venezuela',
    'carga pesada siderurgia',
    'equipos siderúrgicos',
    'movilización sidor',
    'logística siderúrgica',
    'carga industrial siderurgia',
  ],
  
  energetico: [
    'transporte energético venezuela',
    'logística energética',
    'transporte equipos energía',
    'carga pesada energética',
    'generadores pesados',
    'movilización energética',
    'logística corpoelec',
    'carga termoelectricidad',
  ],

  servicios: [
    'lowboy venezuela',
    'cama baja extendible',
    'transporte modular hidráulico',
    'super lowboy 500 toneladas',
    'almacenamiento industrial venezuela',
    'consultoría transporte pesado',
    'ingeniería logística',
    'planificación rutas carga pesada',
    'permisos transporte sobredimensionado',
    'coordinación multimodal',
    'transporte 100 toneladas',
    'transporte 250 toneladas',
    'transporte 500 toneladas',
    'seguimiento gps logística',
  ],

  comercial: [
    'empresa transporte carga pesada certificada venezuela',
    'servicio logística industrial confiable',
    'transporte equipos industriales 500 toneladas',
    'cotización transporte pesado venezuela',
    'presupuesto transporte carga venezuela',
    'cuánto cuesta transporte pesado venezuela',
    'transportista carga sobredimensionada',
    'empresa logística certificada venezuela',
    'proveedor logística venezuela',
    'servicios logísticos b2b',
    'transporte confiable venezuela',
    'logística profesional venezuela',
    'empresa transporte especializada',
    'contacto transporte venezuela',
    'whatsapp logística venezuela',
    'solicitar cotización transporte',
  ],
};

export function getAllKeywords(): string[] {
  const all: string[] = [];
  
  all.push(...SEO_KEYWORDS.tier1);
  all.push(...SEO_KEYWORDS.caracas);
  all.push(...SEO_KEYWORDS.maracaibo);
  all.push(...SEO_KEYWORDS.valencia);
  all.push(...SEO_KEYWORDS.barcelona);
  all.push(...SEO_KEYWORDS.petrolero);
  all.push(...SEO_KEYWORDS.petroquimico);
  all.push(...SEO_KEYWORDS.siderurgico);
  all.push(...SEO_KEYWORDS.energetico);
  all.push(...SEO_KEYWORDS.servicios);
  all.push(...SEO_KEYWORDS.comercial);
  
  return all;
}
