import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useRoute } from 'wouter';
import { Calendar, Eye, MapPin, Briefcase, ArrowLeft, Share2, Loader2 } from 'lucide-react';
import { Link } from 'wouter';
import BlogHeader from '@/components/blog-header';
import Footer from '@/components/footer';
import type { Blog } from '@shared/schema';

const CITIES = {
  'caracas': 'Caracas',
  'maracaibo': 'Maracaibo',
  'valencia': 'Valencia',
  'barquisimeto': 'Barquisimeto',
  'barcelona': 'Barcelona',
  'puerto-cabello': 'Puerto Cabello',
  'puerto-ordaz': 'Puerto Ordaz',
  'punto-fijo': 'Punto Fijo',
};

const SECTORS = {
  'petrolero': 'Petrolero',
  'petroquimico': 'Petroquímico',
  'minero': 'Minero',
  'energetico': 'Energético',
  'construccion': 'Construcción',
  'automotriz': 'Automotriz',
};

export default function SEOBlogArticle() {
  const [match, params] = useRoute('/seo-blog/:slug');
  const slug = params?.slug || '';

  const { data: blog, isLoading } = useQuery<Blog>({
    queryKey: ['/api/blogs', slug],
    queryFn: async () => {
      const response = await fetch(`/api/blogs/${slug}`);
      if (!response.ok) throw new Error('Blog not found');
      return response.json();
    },
    enabled: !!slug,
  });

  useEffect(() => {
    if (blog) {
      document.title = blog.metaTitle || blog.title;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', blog.metaDescription || blog.excerpt || '');
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = blog.metaDescription || blog.excerpt || '';
        document.head.appendChild(meta);
      }

      const schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': blog.title,
        'description': blog.excerpt || '',
        'image': blog.coverImage || blog.ogImage || '',
        'author': {
          '@type': 'Organization',
          'name': 'Grupo Transervica, C.A.',
          'url': 'https://grupotranservica.com'
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'Grupo Transervica, C.A.',
          'logo': {
            '@type': 'ImageObject',
            'url': 'https://page.gensparksite.com/v1/base64_upload/effd6e03d44742614215e90a841dd3a8'
          }
        },
        'datePublished': blog.publishedAt || blog.createdAt,
        'dateModified': blog.updatedAt,
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': `https://grupotranservica.com/seo-blog/${blog.slug}`
        },
        'keywords': blog.keywords?.join(', ') || '',
        'articleSection': blog.sector || '',
        'about': {
          '@type': 'Thing',
          'name': `Transporte de carga pesada en ${blog.city || 'Venezuela'}`
        }
      });
      document.head.appendChild(schemaScript);

      return () => {
        document.head.removeChild(schemaScript);
      };
    }
  }, [blog]);

  const formatDate = (dateString: string | Date) => {
    const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
    return date.toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog?.title,
        text: blog?.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('¡Enlace copiado al portapapeles!');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-green-50/30 flex items-center justify-center">
        <Loader2 className="w-16 h-16 text-[#155d29] animate-spin" />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-green-50/30">
        <BlogHeader showBackButton={false} />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Artículo no encontrado</h1>
          <p className="text-gray-600 mb-8">El artículo que buscas no existe o ha sido eliminado.</p>
          <Link href="/seo-blog">
            <button className="bg-[#155d29] text-white px-6 py-3 rounded-lg hover:bg-[#0f4a21] transition-colors">
              Volver al Blog
            </button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-green-50/30">
      <BlogHeader showBackButton={false} />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link href="/seo-blog">
            <button 
              className="flex items-center gap-2 text-[#155d29] hover:text-[#0f4a21] mb-6 transition-colors"
              data-testid="button-back"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver al blog
            </button>
          </Link>

          {/* Article */}
          <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Cover Image */}
            <div className="aspect-video overflow-hidden bg-gradient-to-br from-[#155d29] to-[#0f4a21]">
              <img
                src={blog.coverImage || 'https://placehold.co/1200x630/155d29/ffffff?text=TRANSERVICA'}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8 lg:p-12">
              {/* Categories */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                {blog.city && (
                  <span className="px-4 py-2 bg-[#155d29]/10 text-[#155d29] text-sm font-semibold rounded-full flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {CITIES[blog.city as keyof typeof CITIES] || blog.city}
                  </span>
                )}
                {blog.sector && (
                  <span className="px-4 py-2 bg-orange-100 text-orange-700 text-sm font-semibold rounded-full flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    {SECTORS[blog.sector as keyof typeof SECTORS] || blog.sector}
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900" data-testid="text-title">
                {blog.title}
              </h1>

              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-6 pb-6 mb-8 border-b border-gray-200">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-5 h-5" />
                  <span>{formatDate(blog.publishedAt || blog.createdAt)}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Eye className="w-5 h-5" />
                  <span data-testid="text-views">{blog.views || 0} vistas</span>
                </div>
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 text-gray-600 hover:text-[#155d29] transition-colors ml-auto"
                  data-testid="button-share"
                >
                  <Share2 className="w-5 h-5" />
                  <span>Compartir</span>
                </button>
              </div>

              {/* Excerpt */}
              {blog.excerpt && (
                <div className="bg-gray-50 border-l-4 border-[#155d29] p-6 mb-8 rounded-r-lg">
                  <p className="text-lg text-gray-700 italic">
                    {blog.excerpt}
                  </p>
                </div>
              )}

              {/* Content */}
              <div 
                className="prose prose-lg max-w-none mb-12"
                dangerouslySetInnerHTML={{ __html: blog.content }}
                data-testid="article-content"
              />

              {/* Keywords */}
              {blog.keywords && blog.keywords.length > 0 && (
                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-lg font-bold mb-4 text-gray-900">Palabras clave:</h3>
                  <div className="flex flex-wrap gap-2">
                    {blog.keywords.map((keyword: string) => (
                      <span
                        key={keyword}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-[#155d29] hover:text-white transition-colors"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="bg-gradient-to-br from-[#155d29] to-[#0f4a21] rounded-2xl p-8 mt-12 text-white">
                <h3 className="text-2xl font-bold mb-4">¿Necesitas transporte de carga pesada?</h3>
                <p className="mb-6 text-white/90">
                  Contáctanos para una cotización personalizada. 40 años de experiencia nos respaldan.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/message/WAKKACM55ESHC1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-[#155d29] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    data-testid="link-whatsapp"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="tel:+584226361047"
                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#155d29] transition-colors"
                    data-testid="link-phone"
                  >
                    +58 422-6361047
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      <Footer />
    </div>
  );
}
