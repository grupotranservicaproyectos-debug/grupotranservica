import { Calendar, User, Clock } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  keywords: string[];
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Transporte de Transformador 333 MVA: Un Hito en Venezuela",
    category: "Proyectos Ejecutados",
    excerpt: "Detalles técnicos del proyecto más ambicioso realizado por TRANSERVICA, transportando un transformador de 333 MVA con nuestros equipos especializados.",
    author: "Equipo Técnico TRANSERVICA",
    date: "2024-01-15",
    readTime: "5 min",
    keywords: ["transporte transformador Venezuela", "333 MVA"],
    image: "/api/placeholder/400/250"
  },
  {
    id: 2,
    title: "Grúas Alemanas Grove y Liebherr: Tecnología de Vanguardia",
    category: "Tecnología y Equipos",
    excerpt: "Conoce las especificaciones técnicas y ventajas competitivas de nuestras grúas alemanas Grove y Liebherr para proyectos de gran envergadura.",
    author: "Departamento de Ingeniería",
    date: "2024-01-10",
    readTime: "7 min",
    keywords: ["grúas alemanas Venezuela", "Grove Liebherr"],
    image: "/api/placeholder/400/250"
  },
  {
    id: 3,
    title: "40 Años Transportando el Futuro de Venezuela",
    category: "Historia Corporativa",
    excerpt: "Un recorrido por la evolución de TRANSERVICA a lo largo de cuatro décadas, marcando hitos importantes en el transporte de cargas excepcionales.",
    author: "Dirección Ejecutiva",
    date: "2024-01-05",
    readTime: "10 min",
    keywords: ["historia Transervica", "40 años experiencia"],
    image: "/api/placeholder/400/250"
  }
];

export default function BlogSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-emerald-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">
            Blog TRANSERVICA
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Noticias, proyectos ejecutados y novedades del sector transporte de cargas excepcionales en Venezuela
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 border-l-4 border-emerald-500"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {post.category}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-emerald-700 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-slate-600 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span className="truncate">{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.keywords.map((keyword, index) => (
                    <span key={index} className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs">
                      {keyword}
                    </span>
                  ))}
                </div>
                
                <button 
                  onClick={scrollToContact}
                  className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Leer Más
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-50 via-white to-orange-50 rounded-2xl p-8 md:p-12 shadow-xl border border-emerald-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              ¿Quiere estar al día con las últimas noticias del sector?
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Suscríbase a nuestro blog y reciba actualizaciones sobre proyectos ejecutados y tendencias del transporte especializado
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Suscribirse al Blog
              </button>
              <button 
                onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Ver Todos los Proyectos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}