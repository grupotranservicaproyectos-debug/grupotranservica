import { useState, useEffect } from "react";
import { Calendar, User, ArrowRight, Eye, MessageCircle, ChevronLeft, ChevronRight, Truck, Settings, Shield, Award } from "lucide-react";
import { Link } from 'wouter';
import { useLanguage } from '../contexts/LanguageContext';
import YouTubeLazy from './youtube-lazy';
import transportImage1 from "@assets/1_1754173669382.webp";
import transportImage2 from "@assets/2_1754173669382.webp";
import transportImage3 from "@assets/3_1754173669382.webp";
import transportImage4 from "@assets/4_1754173669383.webp";
import transportImage5 from "@assets/5_1754173669383.webp";
import equipmentImage1 from "@assets/7_1754162276863.webp";
import equipmentImage2 from "@assets/8_1754162276863.webp";
import equipmentImage3 from "@assets/9_1754162276864.webp";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  views: number;
  comments: number;
  category: string;
  image: string;
  featured: boolean;
}

export default function BlogSection() {
  const { t } = useLanguage();

  const [currentSlide, setCurrentSlide] = useState(0);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: t('blog.post1.title'),
      excerpt: t('blog.post1.excerpt'),
      content: t('blog.post1.content'),
      author: t('blog.post1.author'),
      date: "2024-12-15",
      readTime: "8 min",
      views: 2456,
      comments: 23,
      category: t('blog.page.category'),
      image: transportImage1,
      featured: true
    },
    {
      id: 2,
      title: t('blog.post2.title'),
      excerpt: t('blog.post2.excerpt'),
      content: t('blog.post2.content'),
      author: t('blog.post2.author'),
      date: "2024-11-28",
      readTime: "7 min",
      views: 1834,
      comments: 15,
      category: t('blog.page.category'),
      image: transportImage2,
      featured: true
    },
    {
      id: 3,
      title: t('blog.post3.title'),
      excerpt: t('blog.post3.excerpt'),
      content: t('blog.post3.content'),
      author: t('blog.post3.author'),
      date: "2024-11-10",
      readTime: "9 min",
      views: 3245,
      comments: 41,
      category: t('blog.page.category'),
      image: transportImage3,
      featured: false
    },
    {
      id: 4,
      title: t('blog.post4.title'),
      excerpt: t('blog.post4.excerpt'),
      content: t('blog.post4.content'),
      author: t('blog.post4.author'),
      date: "2024-10-22",
      readTime: "10 min",
      views: 1967,
      comments: 28,
      category: t('blog.page.category'),
      image: transportImage4,
      featured: false
    },
    {
      id: 7,
      title: t('blog.post7.title'),
      excerpt: t('blog.post7.excerpt'),
      content: t('blog.post7.content'),
      author: t('blog.post7.author'),
      date: "2024-12-20",
      readTime: "8 min",
      views: 1523,
      comments: 18,
      category: t('blog.page.category'),
      image: transportImage5,
      featured: true
    },
    {
      id: 8,
      title: t('blog.post8.title'),
      excerpt: t('blog.post8.excerpt'),
      content: t('blog.post8.content'),
      author: t('blog.post8.author'),
      date: "2025-01-15",
      readTime: "9 min",
      views: 2156,
      comments: 27,
      category: t('blog.page.category'),
      image: transportImage1,
      featured: true
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(blogPosts.length / itemsPerSlide);

  // Auto-advance carousel every 2 minutes
  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 120000); // 2 minutes

    return () => clearInterval(autoPlayInterval);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const getCurrentSlideItems = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return blogPosts.slice(startIndex, startIndex + itemsPerSlide);
  };

  const getCategoryIcon = (category: string) => {
    const categoryKey = category.toLowerCase();
    if (categoryKey.includes('project') || categoryKey.includes('proyecto')) {
      return Award;
    } else if (categoryKey.includes('equipment') || categoryKey.includes('equipo')) {
      return Settings;
    } else if (categoryKey.includes('security') || categoryKey.includes('seguridad')) {
      return Shield;
    }
    return Truck;
  };

  return (
    <section id="blog" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-gray-50 to-green-50/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#155d29] rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-32 w-48 h-48 bg-[#155d29] rounded-full blur-3xl"></div>
      </div>
      <div className="relative container mx-auto mobile-padding">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-[#155d29]/20 shadow-lg">
            <div className="w-8 h-8 bg-gradient-to-br from-[#155d29] to-[#0f4a21] rounded-full flex items-center justify-center">
              <Calendar className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-medium text-[#155d29]">{t('blog.section.badge')}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-wrap-balance" style={{ color: '#155d29' }}>{t('blog.section.title')}</h2>
          <p className="mobile-text lg:text-xl max-w-3xl mx-auto mb-6 sm:mb-8 text-gray-600 text-wrap-pretty">
            {t('blog.section.description')}
          </p>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-[#155d29] to-[#0f4a21]"></div>
        </div>

        {/* Manual Carousel */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl sm:text-2xl font-bold" style={{ color: '#155d29' }}>
              {t('blog.section.featured')}
            </h3>
            
            {/* Carousel Controls */}
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    aria-label={`Ir a slide ${index + 1}`}
                    className={`w-3 h-3 rounded-full transition-all duration-300 p-[18px] bg-clip-content ${
                      currentSlide === index 
                        ? 'bg-[#155d29] scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  aria-label="Artículo anterior"
                  className="p-3 rounded-full bg-white border border-gray-200 hover:border-[#155d29] hover:bg-[#155d29] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg group"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Artículo siguiente"
                  className="p-3 rounded-full bg-white border border-gray-200 hover:border-[#155d29] hover:bg-[#155d29] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg group"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Carousel Items */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {blogPosts.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((post) => {
                      const CategoryIcon = getCategoryIcon(post.category);
                      return (
                        <article key={post.id} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 overflow-hidden">
                          {/* Video/Image container */}
                          <div className="relative h-64 overflow-hidden">
                            {post.id === 1 ? (
                              <YouTubeLazy
                                videoId="JnWnFe_QdnE"
                                title={post.title}
                                className="w-full h-full"
                                params="autoplay=1&mute=1&loop=1&playlist=JnWnFe_QdnE"
                                thumbnailQuality="hqdefault"
                              />
                            ) : post.id === 2 ? (
                              <YouTubeLazy
                                videoId="4ZfZ5YFelkQ"
                                title={post.title}
                                className="w-full h-full"
                                params="autoplay=1&mute=1&loop=1&playlist=4ZfZ5YFelkQ"
                                thumbnailQuality="hqdefault"
                              />
                            ) : post.id === 3 ? (
                              <YouTubeLazy
                                videoId="44lpgBO22qU"
                                title={post.title}
                                className="w-full h-full"
                                params="autoplay=1&mute=1&loop=1&playlist=44lpgBO22qU"
                                thumbnailQuality="hqdefault"
                              />
                            ) : post.id === 4 ? (
                              <YouTubeLazy
                                videoId="54hazc90eNk"
                                title={post.title}
                                className="w-full h-full"
                                params="autoplay=1&mute=1&loop=1&playlist=54hazc90eNk"
                                thumbnailQuality="hqdefault"
                              />
                            ) : post.id === 7 ? (
                              <YouTubeLazy
                                videoId="NW9Huszovqw"
                                title={post.title}
                                className="w-full h-full"
                                params="autoplay=1&start=30&end=171&mute=1&loop=1&playlist=NW9Huszovqw"
                                thumbnailQuality="hqdefault"
                              />
                            ) : post.id === 8 ? (
                              <YouTubeLazy
                                videoId="JJjJ6lF_4oI"
                                title={post.title}
                                className="w-full h-full"
                                params="autoplay=1&start=22&end=86&mute=1&loop=1&playlist=JJjJ6lF_4oI"
                                thumbnailQuality="hqdefault"
                              />
                            ) : (
                              <img 
                                src={post.image} 
                                alt={post.title}
                                loading="lazy"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                              />
                            )}
                            
                          </div>

                          {/* Article info */}
                          <div className="p-6">
                            <h3 className="text-xl font-bold mb-3 transition-colors duration-300" style={{ color: '#155d29' }}>
                              {post.title}
                            </h3>
                            
                            <p className="text-slate-600 mb-4 leading-relaxed line-clamp-3">
                              {post.excerpt}
                            </p>
                            
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <Eye className="w-4 h-4" />
                                <span>{post.views.toLocaleString()}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MessageCircle className="w-4 h-4" />
                                <span>{post.comments}</span>
                              </div>
                            </div>
                          </div>

                          {/* Animated border */}
                          <div className="absolute inset-0 border-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ borderColor: '#155d29' }}></div>
                        </article>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="max-w-lg mx-auto mb-16">
          <div className="bg-gradient-to-br from-[#155d29] to-[#0f4a21] rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
            {/* Background pattern for contrast */}
            <div className="absolute inset-0 opacity-15">
              <div className="absolute top-2 right-2 w-16 h-16 border border-white/30 rounded-full"></div>
              <div className="absolute bottom-2 left-2 w-12 h-12 border border-white/30 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-white/10 rounded-full blur-lg"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40">
                  <Calendar className="w-4 h-4 text-white drop-shadow-lg" />
                </div>
                <h3 className="text-xl font-bold text-white drop-shadow-lg">
                  {t('blog.section.newsletter.title')}
                </h3>
              </div>
              <p className="text-sm mb-6 text-white/90 drop-shadow-sm">
                {t('blog.section.newsletter.description')}
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder={t('blog.section.newsletter.placeholder')}
                  className="w-full px-4 py-3 rounded-xl bg-white/25 border-2 border-white/40 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/60 focus:border-white/70 backdrop-blur-sm transition-all duration-300 drop-shadow-sm"
                />
                <button className="w-full bg-white text-[#155d29] font-bold py-3 px-4 rounded-xl hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border-2 border-white">
                  {t('blog.section.newsletter.subscribe')}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Ver Todos los Artículos */}
        <div className="text-center mt-12">
          <Link
            href="/blog#blog-main"
            className="inline-flex items-center gap-3 bg-white border-2 border-[#155d29] text-[#155d29] font-bold py-4 px-8 rounded-xl hover:bg-[#155d29] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            onClick={() => {
              setTimeout(() => {
                const element = document.getElementById('blog-main');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }, 100);
            }}
          >
            <Calendar className="w-5 h-5" />
            {t('blog.section.viewAll')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 relative">
          <div className="bg-gradient-to-r from-[#155d29] to-[#0f4a21] rounded-3xl p-8 sm:p-12 text-white shadow-2xl overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 right-4 w-32 h-32 border-2 border-white/40 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-24 h-24 border-2 border-white/40 rounded-full"></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50">
                  <Truck className="w-6 h-6 text-white drop-shadow-lg" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">
                  {t('blog.section.cta.title')}
                </h3>
              </div>
              <p className="mb-8 text-white/90 max-w-2xl mx-auto text-lg drop-shadow-md">
                {t('blog.section.cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-[#155d29] font-bold py-4 px-8 rounded-xl hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 border-2 border-white"
                >
                  <ArrowRight className="w-5 h-5" />
                  {t('blog.section.cta.consult')}
                </button>
                <button 
                  onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white/30 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-xl hover:bg-white/40 transition-all duration-300 transform hover:scale-105 border-2 border-white/60 hover:border-white flex items-center justify-center gap-2 shadow-lg"
                >
                  <Eye className="w-5 h-5" />
                  {t('blog.section.cta.services')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}