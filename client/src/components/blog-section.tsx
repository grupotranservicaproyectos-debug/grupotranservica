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
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-transervica-gray mb-4">
            Blog Transervica
          </h2>
          <p className="text-xl text-gray-600">
            Noticias, proyectos y novedades del sector transporte
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              {/* Imagen destacada */}
              <div className="aspect-video bg-gradient-to-br from-transervica-green to-transervica-gray relative">
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-2xl font-bold mb-2">{post.category}</div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-transervica-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {post.category}
                </div>
              </div>

              {/* Contenido del artículo */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-transervica-gray mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta información */}
                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString('es-VE')}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                {/* Keywords */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.keywords.map((keyword, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>

                {/* Botón CTA */}
                <button 
                  onClick={scrollToContact}
                  className="w-full bg-transervica-green text-white px-4 py-2 rounded-lg font-semibold hover:bg-transervica-light-green transition"
                >
                  LEER ARTÍCULO COMPLETO
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Suscripción al blog */}
        <div className="mt-16 bg-transervica-green rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Suscríbete a Nuestro Blog</h3>
          <p className="text-lg mb-6">
            Recibe las últimas noticias sobre transporte de cargas excepcionales
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Tu email aquí"
              className="flex-1 px-4 py-2 rounded-lg text-gray-800"
            />
            <button 
              onClick={scrollToContact}
              className="bg-white text-transervica-green px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              SUSCRIBIRSE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}