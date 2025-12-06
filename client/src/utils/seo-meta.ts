/**
 * SEO Meta Tags - TRANSERVICA
 * Implementación completa de Meta Tags, Open Graph, Twitter Cards y Schema.org
 */

const SEO_CONFIG = {
  siteName: 'GRUPO TRANSERVICA C.A',
  siteUrl: 'https://grupotranservica.com',
  defaultTitle: 'TRANSERVICA - Transporte Cargas Excepcionales Venezuela | Hasta 1,100 Toneladas',
  defaultDescription: 'Transporte de cargas excepcionales hasta 1,100 toneladas en Venezuela. Equipos alemanes SCHEUERLE, permisos INTT, cotización instantánea. 40 años de experiencia especializada.',
  defaultKeywords: 'transporte cargas excepcionales Venezuela, cargas sobredimensionadas, permisos INTT, grúas móviles, transporte pesado Venezuela, SCHEUERLE, transporte transformadores',
  defaultImage: 'https://grupotranservica.com/og-image.jpg',
  twitterHandle: '@grupotranservica',
  
  contact: {
    telephone: '+584226361047',
    email: 'direccioncomercialtvc@grupotranservica.com',
    whatsapp: '+584226361047',
  },
  
  address: {
    streetAddress: 'Carretera Nacional Maracay Mariara Km 9',
    addressLocality: 'Mariara',
    addressRegion: 'Carabobo',
    postalCode: '2101',
    addressCountry: 'VE',
  },
  
  geo: {
    latitude: '10.3231',
    longitude: '-67.6533',
  },
  
  socialLinks: [
    'https://www.facebook.com/people/Grupotranservica/100093036004743',
    'https://www.instagram.com/grupotranservica',
    'https://www.youtube.com/@transervicac.a.3092',
  ],
};

function createMetaTag(name: string, content: string): void {
  let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = name;
    document.head.appendChild(meta);
  }
  meta.content = content;
}

function createMetaProperty(property: string, content: string): void {
  let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('property', property);
    document.head.appendChild(meta);
  }
  meta.content = content;
}

function injectSchemaOrg(): void {
  const existingSchema = document.querySelector('script[type="application/ld+json"]');
  if (existingSchema) {
    existingSchema.remove();
  }

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': SEO_CONFIG.siteUrl,
        'name': SEO_CONFIG.siteName,
        'image': SEO_CONFIG.defaultImage,
        'description': SEO_CONFIG.defaultDescription,
        'url': SEO_CONFIG.siteUrl,
        'telephone': SEO_CONFIG.contact.telephone,
        'email': SEO_CONFIG.contact.email,
        'address': {
          '@type': 'PostalAddress',
          ...SEO_CONFIG.address,
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': SEO_CONFIG.geo.latitude,
          'longitude': SEO_CONFIG.geo.longitude,
        },
        'sameAs': SEO_CONFIG.socialLinks,
        'openingHoursSpecification': {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          'opens': '08:00',
          'closes': '18:00',
        },
        'priceRange': '$$$',
        'areaServed': {
          '@type': 'Country',
          'name': 'Venezuela',
        },
        'serviceType': [
          'Transporte de cargas excepcionales',
          'Transporte de cargas sobredimensionadas',
          'Grúas móviles',
          'Izamiento especializado',
          'Permisos INTT',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SEO_CONFIG.siteUrl}/#website`,
        'url': SEO_CONFIG.siteUrl,
        'name': SEO_CONFIG.siteName,
        'description': SEO_CONFIG.defaultDescription,
        'publisher': {
          '@id': SEO_CONFIG.siteUrl,
        },
        'inLanguage': ['es', 'en'],
      },
      {
        '@type': 'Organization',
        '@id': `${SEO_CONFIG.siteUrl}/#organization`,
        'name': SEO_CONFIG.siteName,
        'url': SEO_CONFIG.siteUrl,
        'logo': {
          '@type': 'ImageObject',
          'url': `${SEO_CONFIG.siteUrl}/logo.png`,
        },
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': SEO_CONFIG.contact.telephone,
          'contactType': 'customer service',
          'availableLanguage': ['Spanish', 'English'],
        },
        'sameAs': SEO_CONFIG.socialLinks,
        'foundingDate': '1985',
        'numberOfEmployees': {
          '@type': 'QuantitativeValue',
          'value': '100+',
        },
      },
    ],
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

export function initializeSEOMeta(): void {
  createMetaTag('description', SEO_CONFIG.defaultDescription);
  createMetaTag('keywords', SEO_CONFIG.defaultKeywords);
  createMetaTag('author', SEO_CONFIG.siteName);
  createMetaTag('robots', 'index, follow');
  createMetaTag('googlebot', 'index, follow');

  createMetaProperty('og:type', 'website');
  createMetaProperty('og:site_name', SEO_CONFIG.siteName);
  createMetaProperty('og:title', SEO_CONFIG.defaultTitle);
  createMetaProperty('og:description', SEO_CONFIG.defaultDescription);
  createMetaProperty('og:image', SEO_CONFIG.defaultImage);
  createMetaProperty('og:url', SEO_CONFIG.siteUrl);
  createMetaProperty('og:locale', 'es_VE');
  createMetaProperty('og:locale:alternate', 'en_US');

  createMetaTag('twitter:card', 'summary_large_image');
  createMetaTag('twitter:site', SEO_CONFIG.twitterHandle);
  createMetaTag('twitter:title', SEO_CONFIG.defaultTitle);
  createMetaTag('twitter:description', SEO_CONFIG.defaultDescription);
  createMetaTag('twitter:image', SEO_CONFIG.defaultImage);

  injectSchemaOrg();
}

export function updatePageMeta(options: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}): void {
  if (options.title) {
    document.title = `${options.title} | ${SEO_CONFIG.siteName}`;
    createMetaProperty('og:title', options.title);
    createMetaTag('twitter:title', options.title);
  }

  if (options.description) {
    createMetaTag('description', options.description);
    createMetaProperty('og:description', options.description);
    createMetaTag('twitter:description', options.description);
  }

  if (options.image) {
    createMetaProperty('og:image', options.image);
    createMetaTag('twitter:image', options.image);
  }

  if (options.url) {
    createMetaProperty('og:url', options.url);
  }

  if (options.type) {
    createMetaProperty('og:type', options.type);
  }
}

export { SEO_CONFIG };
