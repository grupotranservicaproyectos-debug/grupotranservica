import { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { queryClient, apiRequest } from '@/lib/queryClient';
import { 
  BarChart3, 
  Eye, 
  FileText, 
  Calendar, 
  RefreshCw, 
  Plus, 
  Loader2,
  CheckCircle,
  AlertCircle,
  TrendingUp
} from 'lucide-react';
import { Link } from 'wouter';
import BlogHeader from '@/components/blog-header';
import Footer from '@/components/footer';
import type { Blog } from '@shared/schema';

interface BlogStats {
  totalBlogs: number;
  blogsThisMonth: number;
}

export default function BlogDashboard() {
  const [isGenerating, setIsGenerating] = useState(false);

  const { data: stats, isLoading: statsLoading } = useQuery<BlogStats>({
    queryKey: ['/api/blogs/stats'],
  });

  const { data: blogs = [], isLoading: blogsLoading } = useQuery<Blog[]>({
    queryKey: ['/api/blogs'],
  });

  const ADMIN_TOKEN = import.meta.env.VITE_ADMIN_TOKEN || 'transervica-admin-2025';

  const generateSingleBlog = useMutation({
    mutationFn: async () => {
      setIsGenerating(true);
      const response = await fetch('/api/blogs/generate', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${ADMIN_TOKEN}`,
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al generar blog');
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/blogs'] });
      queryClient.invalidateQueries({ queryKey: ['/api/blogs/stats'] });
      setIsGenerating(false);
    },
    onError: (error: Error) => {
      console.error('Error generating blog:', error);
      alert(`Error: ${error.message}`);
      setIsGenerating(false);
    },
  });

  const generateBatchBlogs = useMutation({
    mutationFn: async () => {
      setIsGenerating(true);
      const response = await fetch('/api/blogs/generate-batch', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${ADMIN_TOKEN}`,
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al generar blogs');
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/blogs'] });
      queryClient.invalidateQueries({ queryKey: ['/api/blogs/stats'] });
      setIsGenerating(false);
    },
    onError: (error: Error) => {
      console.error('Error generating blogs:', error);
      alert(`Error: ${error.message}`);
      setIsGenerating(false);
    },
  });

  const totalViews = blogs.reduce((sum, blog) => sum + (blog.views || 0), 0);
  const avgViews = blogs.length > 0 ? Math.round(totalViews / blogs.length) : 0;

  const topBlogs = [...blogs]
    .sort((a, b) => (b.views || 0) - (a.views || 0))
    .slice(0, 5);

  const formatDate = (dateString: string | Date) => {
    const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
    return date.toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const isLoading = statsLoading || blogsLoading;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-green-50/30">
      <BlogHeader showBackButton={false} />

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2" data-testid="page-title">
            Dashboard de Blogs SEO
          </h1>
          <p className="text-gray-600">
            Gestiona y monitorea el rendimiento de los artículos generados automáticamente
          </p>
        </div>

        {/* Action Buttons */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => generateSingleBlog.mutate()}
              disabled={isGenerating || generateSingleBlog.isPending}
              className="flex items-center gap-2 bg-[#155d29] text-white px-6 py-3 rounded-lg hover:bg-[#0f4a21] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              data-testid="button-generate-single"
            >
              {(isGenerating || generateSingleBlog.isPending) ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Generando...
                </>
              ) : (
                <>
                  <Plus className="w-5 h-5" />
                  Generar 1 Blog
                </>
              )}
            </button>

            <button
              onClick={() => generateBatchBlogs.mutate()}
              disabled={isGenerating || generateBatchBlogs.isPending}
              className="flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              data-testid="button-generate-batch"
            >
              {(isGenerating || generateBatchBlogs.isPending) ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Generando 5 blogs...
                </>
              ) : (
                <>
                  <RefreshCw className="w-5 h-5" />
                  Generar 5 Blogs
                </>
              )}
            </button>

            <Link href="/seo-blog">
              <button
                className="flex items-center gap-2 border-2 border-[#155d29] text-[#155d29] px-6 py-3 rounded-lg hover:bg-[#155d29] hover:text-white transition-colors"
                data-testid="link-view-blog"
              >
                <Eye className="w-5 h-5" />
                Ver Blog Público
              </button>
            </Link>
          </div>

          {(generateSingleBlog.isSuccess || generateBatchBlogs.isSuccess) && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 text-green-800">
              <CheckCircle className="w-5 h-5" />
              <span>¡Blogs generados exitosamente!</span>
            </div>
          )}

          {(generateSingleBlog.isError || generateBatchBlogs.isError) && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-800">
              <AlertCircle className="w-5 h-5" />
              <span>Error al generar blogs. Por favor intenta de nuevo.</span>
            </div>
          )}
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-12 h-12 text-[#155d29] animate-spin" />
          </div>
        ) : (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-1">Total de Blogs</p>
                <p className="text-3xl font-bold text-gray-900" data-testid="stat-total-blogs">
                  {stats?.totalBlogs || 0}
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Calendar className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-1">Este Mes</p>
                <p className="text-3xl font-bold text-gray-900" data-testid="stat-month-blogs">
                  {stats?.blogsThisMonth || 0}
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Eye className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-1">Vistas Totales</p>
                <p className="text-3xl font-bold text-gray-900" data-testid="stat-total-views">
                  {totalViews.toLocaleString()}
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-orange-100 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-1">Promedio Vistas</p>
                <p className="text-3xl font-bold text-gray-900" data-testid="stat-avg-views">
                  {avgViews}
                </p>
              </div>
            </div>

            {/* Top Performing Blogs */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-[#155d29]" />
                Top 5 Artículos Más Vistos
              </h2>
              
              {topBlogs.length > 0 ? (
                <div className="space-y-4">
                  {topBlogs.map((blog, index) => (
                    <Link
                      key={blog.id}
                      href={`/seo-blog/${blog.slug}`}
                      className="block"
                      data-testid={`card-top-blog-${index + 1}`}
                    >
                      <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-[#155d29] hover:bg-green-50/30 transition-all group">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#155d29] to-[#0f4a21] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                            {index + 1}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 group-hover:text-[#155d29] transition-colors line-clamp-1">
                            {blog.title}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">
                            {formatDate(blog.createdAt)}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Eye className="w-5 h-5" />
                          <span className="font-semibold">{blog.views || 0}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">
                  No hay artículos todavía. Genera tu primer blog.
                </p>
              )}
            </div>

            {/* Recent Blogs */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Artículos Recientes
              </h2>
              
              {blogs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {blogs.slice(0, 6).map((blog) => (
                    <Link
                      key={blog.id}
                      href={`/seo-blog/${blog.slug}`}
                      className="block"
                      data-testid={`card-recent-blog-${blog.slug}`}
                    >
                      <div className="border border-gray-200 rounded-lg p-4 hover:border-[#155d29] hover:bg-green-50/30 transition-all">
                        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                          {blog.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                          {blog.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{formatDate(blog.createdAt)}</span>
                          <div className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            <span>{blog.views || 0}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">
                  No hay artículos todavía. Genera tu primer blog.
                </p>
              )}
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}
