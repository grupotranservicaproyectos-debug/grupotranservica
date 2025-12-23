import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useRoute } from 'wouter';
import { Calendar, Eye, MapPin, Briefcase, ArrowLeft, Share2, Loader2, Phone, Mail, MapPinned } from 'lucide-react';
import { Link } from 'wouter';
import BlogHeader from '@/components/blog-header';
import Footer from '@/components/footer';
import BlogContactForm from '@/components/blog-contact-form';
import SEO from '@/components/seo';
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

  const { data: relatedBlogs } = useQuery<{ data: Blog[] }>({
    queryKey: ['/api/blogs', slug, 'related'],
    queryFn: async () => {
      const response = await fetch(`/api/blogs/${slug}/related`);
      return response.json();
    },
    enabled: !!blog && !!slug,
  });


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
        text: blog?.excerpt || undefined,
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
      <SEO
        title={blog.metaTitle || blog.title}
        description={blog.metaDescription || blog.excerpt || ''}
        keywords={blog.keywords?.join(', ') || ''}
        canonical={`https://grupotranservica.com/seo-blog/${blog.slug}`}
        ogTitle={blog.title}
        ogDescription={blog.excerpt || ''}
        ogImage={blog.coverImage || undefined}
        ogType="article"
        article={{
          publishedTime: blog.publishedAt instanceof Date ? blog.publishedAt.toISOString() : (blog.publishedAt || (blog.createdAt instanceof Date ? blog.createdAt.toISOString() : blog.createdAt)),
          modifiedTime: blog.updatedAt instanceof Date ? blog.updatedAt.toISOString() : blog.updatedAt || undefined,
          author: 'TRANSERVICA C.A.',
          section: blog.sector || undefined,
          tags: blog.keywords || undefined,
        }}
      />
      <BlogHeader showBackButton={false} />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link href="/seo-blog">
            <button 
              className="flex items-center gap-2 text-[#155d29] hover:text-[#0f4a21] mb-6 transition-colors min-h-[48px] py-2"
              data-testid="button-back"
              aria-label="Volver a la lista de artículos del blog"
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
                alt={`${blog.title} - Transporte de Cargas Excepcionales Venezuela`}
                className="w-full h-full object-cover"
                width={1200}
                height={630}
                decoding="sync"
                style={{ aspectRatio: '16/9' }}
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
                  className="flex items-center gap-2 text-gray-600 hover:text-[#155d29] transition-colors ml-auto min-h-[48px] py-2"
                  data-testid="button-share"
                  aria-label="Compartir este artículo"
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
                className="prose prose-lg max-w-none mb-12 blog-content"
                dangerouslySetInnerHTML={{ __html: blog.content }}
                data-testid="article-content"
              />

              {/* Secondary Images */}
              {blog.secondaryImages && blog.secondaryImages.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {blog.secondaryImages.map((imageUrl: string, index: number) => (
                    <div key={index} className="rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={imageUrl}
                        alt={`${blog.title} - Transporte pesado Venezuela - Imagen ${index + 1}`}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        decoding="async"
                        width={600}
                        height={256}
                        style={{ aspectRatio: '600/256' }}
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Company Contact Info */}
              <div className="bg-gradient-to-r from-[#155d29] to-[#0f4a21] text-white rounded-xl p-8 mb-12">
                <h3 className="text-2xl font-bold mb-6 text-center">📞 Datos de Contacto - Grupo Transervica, C.A.</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <Phone className="w-8 h-8 mx-auto mb-2" aria-hidden="true" />
                    <p className="font-semibold mb-1">Teléfonos</p>
                    <a href="tel:+584226361047" className="block text-sm hover:underline min-h-[44px] py-2" aria-label="Llamar al +58 422-6361047">+58 422-6361047</a>
                    <a href="tel:+584123675636" className="block text-sm hover:underline min-h-[44px] py-2" aria-label="Llamar al +58 412-367-5636">+58 412-367-5636</a>
                    <a href="tel:+584142776340" className="block text-sm hover:underline min-h-[44px] py-2" aria-label="Llamar al +58 414-277-6340">+58 414-277-6340</a>
                  </div>
                  <div>
                    <Mail className="w-8 h-8 mx-auto mb-2" aria-hidden="true" />
                    <p className="font-semibold mb-1">Emails</p>
                    <a href="mailto:direccioncomercialtvc@grupotranservica.com" className="block text-sm hover:underline break-all min-h-[44px] py-2" aria-label="Enviar email a dirección comercial">
                      direccioncomercialtvc@grupotranservica.com
                    </a>
                    <a href="mailto:direccionejecutivatvc@grupotranservica.com" className="block text-sm hover:underline break-all min-h-[44px] py-2" aria-label="Enviar email a dirección ejecutiva">
                      direccionejecutivatvc@grupotranservica.com
                    </a>
                  </div>
                  <div>
                    <MapPinned className="w-8 h-8 mx-auto mb-2" aria-hidden="true" />
                    <p className="font-semibold mb-1">Ubicación</p>
                    <p className="text-sm">Venezuela</p>
                    <a 
                      href="https://wa.me/message/WAKKACM55ESHC1" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block mt-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-sm font-semibold transition-colors min-h-[48px]"
                      aria-label="Contactar por WhatsApp"
                      data-testid="link-whatsapp-contact"
                    >
                      💬 WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Related Articles */}
              {relatedBlogs?.data && (() => {
                const filteredBlogs = relatedBlogs.data.filter((relatedBlog: Blog) => relatedBlog.slug !== blog?.slug).slice(0, 3);
                if (filteredBlogs.length === 0) return null;
                
                return (
                  <div className="border-t border-gray-200 pt-8 mb-12">
                    <h3 className="text-2xl font-bold mb-6 text-gray-900">📚 Artículos Relacionados</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {filteredBlogs.map((relatedBlog: Blog) => (
                        <Link key={relatedBlog.slug} href={`/seo-blog/${relatedBlog.slug}`}>
                          <div className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-[#155d29] hover:shadow-lg transition-all cursor-pointer group">
                            <div className="flex items-start gap-3">
                              {relatedBlog.coverImage && (
                                <img
                                  src={relatedBlog.coverImage}
                                  alt={`${relatedBlog.title} - Artículo relacionado`}
                                  className="w-20 h-20 object-cover rounded-lg"
                                  loading="lazy"
                                  decoding="async"
                                  width={80}
                                  height={80}
                                  style={{ aspectRatio: '1/1' }}
                                />
                              )}
                              <div className="flex-1">
                                <h4 className="font-semibold text-gray-900 group-hover:text-[#155d29] transition-colors line-clamp-2 mb-2">
                                  {relatedBlog.title}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {relatedBlog.city && (
                                    <span className="text-xs px-2 py-1 bg-[#155d29]/10 text-[#155d29] rounded-full">
                                      {CITIES[relatedBlog.city as keyof typeof CITIES]}
                                    </span>
                                  )}
                                  {relatedBlog.sector && (
                                    <span className="text-xs px-2 py-1 bg-orange-100 text-orange-700 rounded-full">
                                      {SECTORS[relatedBlog.sector as keyof typeof SECTORS]}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })()}

              {/* Contact Form */}
              <div className="mb-12">
                <BlogContactForm blogTitle={blog.title} />
              </div>

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
                    className="bg-white text-[#155d29] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors min-h-[48px] flex items-center"
                    data-testid="link-whatsapp"
                    aria-label="Contactar por WhatsApp para cotización"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="tel:+584226361047"
                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#155d29] transition-colors min-h-[48px] flex items-center"
                    data-testid="link-phone"
                    aria-label="Llamar al +58 422-6361047"
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
