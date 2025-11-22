import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Search, Filter, Calendar, Eye, MapPin, Briefcase, Loader2 } from 'lucide-react';
import { Link } from 'wouter';
import BlogHeader from '@/components/blog-header';
import Footer from '@/components/footer';
import { useLanguage } from '../contexts/LanguageContext';
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

export default function SEOBlogPage() {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedSector, setSelectedSector] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  const { data: blogs = [], isLoading } = useQuery<Blog[]>({
    queryKey: ['/api/blogs', selectedCity, selectedSector],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (selectedCity) params.append('city', selectedCity);
      if (selectedSector) params.append('sector', selectedSector);
      params.append('published', 'true');
      
      const response = await fetch(`/api/blogs?${params}`);
      if (!response.ok) throw new Error('Failed to fetch blogs');
      const result = await response.json();
      return result.data;
    },
  });

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = 
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (blog.excerpt || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.keywords?.some((kw: string) => kw.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesSearch;
  });

  const totalPages = Math.ceil(filteredBlogs.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentBlogs = filteredBlogs.slice(startIndex, startIndex + postsPerPage);

  const formatDate = (dateString: string | Date) => {
    const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
    return date.toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-green-50/30">
      <BlogHeader showBackButton={false} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#155d29] to-[#0f4a21] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-testid="page-title">
              Blog de Logística y Transporte
            </h1>
            <p className="text-lg lg:text-xl text-white/90">
              Guías especializadas sobre transporte de carga pesada en Venezuela
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar artículos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#155d29]"
                  data-testid="input-search"
                />
              </div>
            </div>

            {/* City Filter */}
            <div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCity}
                  onChange={(e) => {
                    setSelectedCity(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#155d29] appearance-none bg-white"
                  data-testid="select-city"
                >
                  <option value="">Todas las ciudades</option>
                  {Object.entries(CITIES).map(([key, value]) => (
                    <option key={key} value={key}>{value}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Sector Filter */}
            <div>
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedSector}
                  onChange={(e) => {
                    setSelectedSector(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#155d29] appearance-none bg-white"
                  data-testid="select-sector"
                >
                  <option value="">Todos los sectores</option>
                  {Object.entries(SECTORS).map(([key, value]) => (
                    <option key={key} value={key}>{value}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Results Counter */}
          <div className="mt-4 text-sm text-gray-600" data-testid="text-results-count">
            Mostrando {currentBlogs.length} de {filteredBlogs.length} artículos
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-12 h-12 text-[#155d29] animate-spin" />
          </div>
        )}

        {/* Blog Grid */}
        {!isLoading && currentBlogs.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentBlogs.map((blog) => (
              <Link
                key={blog.id}
                href={`/seo-blog/${blog.slug}`}
                className="group"
                data-testid={`card-blog-${blog.slug}`}
              >
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full flex flex-col">
                  <div className="aspect-video overflow-hidden bg-gradient-to-br from-[#155d29] to-[#0f4a21]">
                    <img
                      src={blog.coverImage || 'https://placehold.co/1200x630/155d29/ffffff?text=TRANSERVICA'}
                      alt={blog.title}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      {blog.city && (
                        <span className="px-3 py-1 bg-[#155d29]/10 text-[#155d29] text-xs font-semibold rounded-full flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {CITIES[blog.city as keyof typeof CITIES] || blog.city}
                        </span>
                      )}
                      {blog.sector && (
                        <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full flex items-center gap-1">
                          <Briefcase className="w-3 h-3" />
                          {SECTORS[blog.sector as keyof typeof SECTORS] || blog.sector}
                        </span>
                      )}
                    </div>

                    <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#155d29] transition-colors line-clamp-2">
                      {blog.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                      {blog.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(blog.publishedAt || blog.createdAt)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{blog.views || 0} vistas</span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && currentBlogs.length === 0 && (
          <div className="text-center py-20">
            <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-700 mb-2">
              No se encontraron artículos
            </h3>
            <p className="text-gray-500">
              Intenta ajustar los filtros de búsqueda
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              data-testid="button-previous-page"
            >
              Anterior
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === page
                      ? 'bg-[#155d29] text-white'
                      : 'border border-gray-300 hover:bg-gray-50'
                  }`}
                  data-testid={`button-page-${page}`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              data-testid="button-next-page"
            >
              Siguiente
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
