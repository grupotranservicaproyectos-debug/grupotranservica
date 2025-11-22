import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
}

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
  article,
}: SEOProps) {
  const { language } = useLanguage();
  const baseUrl = 'https://www.transervica.net';
  
  const defaultTitle = 'TRANSERVICA C.A | Transporte Cargas Excepcionales Venezuela | Equipos Alemanes SCHEUERLE | 1,100 Toneladas';
  const defaultDescription = '🏆 Transporte cargas excepcionales Venezuela con equipos alemanes SCHEUERLE. Modulares hidráulicos 1,100 tons, grúas móviles 500 tons, izamiento especializado. 40 años experiencia. ¡Cotización 24/7!';
  const defaultKeywords = 'transporte cargas excepcionales Venezuela, equipos alemanes Venezuela, SCHEUERLE Venezuela, transporte sobredimensionado Venezuela, modulares hidráulicos Venezuela, grúas móviles Venezuela, izamiento especializado Venezuela, cargas críticas Venezuela';
  const defaultImage = `${baseUrl}/attached_assets/logo%20transervica%20sin%20fondo_1754163034585.png`;
  
  const finalTitle = title || defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;
  const finalCanonical = canonical || window.location.href;
  const finalOgTitle = ogTitle || finalTitle;
  const finalOgDescription = ogDescription || finalDescription;
  const finalOgImage = ogImage || defaultImage;
  
  const locale = language === 'en' ? 'en_US' : 'es_VE';
  const alternateLocale = language === 'en' ? 'es_VE' : 'en_US';
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="title" content={finalTitle} />
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalCanonical} />
      
      {/* Hreflang tags */}
      <link rel="alternate" hrefLang="es" href={`${baseUrl}${window.location.pathname}?lang=es`} />
      <link rel="alternate" hrefLang="en" href={`${baseUrl}${window.location.pathname}?lang=en`} />
      <link rel="alternate" hrefLang="es-VE" href={`${baseUrl}${window.location.pathname}?lang=es`} />
      <link rel="alternate" hrefLang="en-US" href={`${baseUrl}${window.location.pathname}?lang=en`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}${window.location.pathname}?lang=es`} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:site_name" content="TRANSERVICA C.A." />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:image:alt" content={finalOgTitle} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={locale} />
      <meta property="og:locale:alternate" content={alternateLocale} />
      
      {/* Article specific meta tags */}
      {ogType === 'article' && article && (
        <>
          {article.publishedTime && (
            <meta property="article:published_time" content={article.publishedTime} />
          )}
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          {article.author && (
            <meta property="article:author" content={article.author} />
          )}
          {article.section && (
            <meta property="article:section" content={article.section} />
          )}
          {article.tags && article.tags.map((tag) => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalOgTitle} />
      <meta name="twitter:description" content={finalOgDescription} />
      <meta name="twitter:image" content={finalOgImage} />
      <meta name="twitter:image:alt" content={finalOgTitle} />
    </Helmet>
  );
}
