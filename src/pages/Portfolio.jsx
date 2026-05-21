import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Portfolio.scss';

const Portfolio = () => {
  const [filter, setFilter] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const categories = ['Todos', 'Drywall', 'Carpintería', 'Corporativo'];

  // ARRAY DE MORONI ACTUALIZADO: Con 'media' (soporta imagen y video), 'longDesc' y 'specs'
  const projects = [
    { 
      id: 1, 
      title: 'Clóset Empotrado a Medida', 
      category: 'Carpintería', 
      img: '/closet-empotrado-de-melamina-a-medida.jpeg',
      longDesc: 'Diseño, fabricación e instalación de clóset empotrado de piso a techo con sistema de puertas corredizas. Optimizamos al máximo el espacio interior distribuyendo estratégicamente zonas de colgado, cajoneras reforzadas y múltiples niveles de repisas, todo con un acabado texturizado premium que combina estética y alta durabilidad.',
     specs: [
    'Melamina de alta densidad de 18mm con textura maderada',
    'Sistema corredizo de aluminio de alta suavidad con rieles embutidos',
    'Cajoneras internas con correderas telescópicas pesadas',
    'Interior optimizado con colgadores cromados y maletero superior independiente',
    'Ajuste milimétrico y sellado perimetral contra muros y techo'
  ],
      media: [
    { type: 'image', url: '/closet-empotrado-de-melamina-a-medida.jpeg' },
    { type: 'image', url: '/closet-de-melamina-con-puertas-corredizas-y-repisas.jpeg' },
    { type: 'image', url: '/closet-empotrado-con-cajoneras-internas.jpeg' },
    { type: 'image', url: '/closet-maderado-de-piso-a-techo-servicios-moroni.jpeg' },
    { type: 'image', url: '/mueble-closet-de-melamina-para-dormitorio.jpeg' }
  ]
    },
    { 
      id: 2, // El ID correlativo que toque en tu lista
  title: 'Ropero Empotrado Gris Grafito Premium',
  category: 'Carpintería',
  img: '/closet-moderno-melamina-gris-grafito.jpeg', // Imagen principal
  longDesc: 'Fabricación integral de clóset empotrado de gran formato (4 cuerpos) en melamina de tono gris grafito. Diseñado a medida de piso a techo, maximiza el almacenamiento con un centro de cajones ocultos, repisas laterales modulares y percheros de doble altura, todo protegido por un sistema de puertas corredizas sutiles y maleteros superiores optimizados.',
  specs: [
    'Melamina premium de 18mm color gris grafito mate',
    'Configuración de 4 paños con sistema corredizo silencioso de aluminio',
    'Módulo central con cajoneras ocultas de apertura total',
    'Distribución interna simétrica con percheros cromados de alta resistencia',
    'Estructura empotrada con zócalo y ajuste perfecto a paredes de concreto'
  ],
  media: [
    { type: 'image', url: '/closet-moderno-melamina-gris-grafito.jpeg' },
    { type: 'image', url: '/closet-empotrado-gris-con-cajones.jpeg' },
    { type: 'image', url: '/closet-de-melamina-distribucion-interior.jpeg' },
    { type: 'image', url: '/mueble-closet-gris-puertas-corredizas.jpeg' },
    { type: 'image', url: '/closet-mueble-a-medida-dormitorio-lima.jpeg' }
  ]
    },
    { 
      id: 3, 
      title: 'Ampliación Planta', 
      category: 'Drywall', 
      img: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=800&q=80',
      longDesc: 'División de naves industriales utilizando placas de fibrocemento de alta resistencia para zonas de producción.',
      specs: ['Placas Superboard de 8mm', 'Estructura pesada calibre 0.90', 'Resistencia al fuego 60 min'],
      media: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=1200&q=80' }
      ]
    },
    { 
      id: 4, 
      title: 'Mantenimiento Sede Sur', 
      category: 'Corporativo', 
      img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80',
      longDesc: 'Mantenimiento integral preventivo y correctivo de instalaciones corporativas. Renovación de fachadas y áreas comunes.',
      specs: ['Pintura exterior de alto tráfico', 'Revisión de luminarias', 'Reparación de mobiliario fijo'],
      media: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80' }
      ]
    },
    { 
      id: 5, 
      title: 'Puertas Acústicas', 
      category: 'Carpintería', 
      img: 'https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?auto=format&fit=crop&w=800&q=80',
      longDesc: 'Fabricación e instalación de puertas acústicas enchapadas en madera cedro para salas de reuniones gerenciales.',
      specs: ['Aislamiento interior de 50mm', 'Sellos perimetrales de goma', 'Cerraduras antipánico'],
      media: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?auto=format&fit=crop&w=1200&q=80' }
      ]
    },
    { 
      id: 6, 
      title: 'Tabiquería Clínica', 
      category: 'Drywall', 
      img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
      longDesc: 'Instalación de tabiquería con placas resistentes a la humedad (RH) para consultorios médicos y zonas de esterilización.',
      specs: ['Placas RH (verdes)', 'Masilla antibacteriana', 'Zócalos sanitarios de aluminio'],
      media: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80' }
      ]
    },
  ];

  const filteredProjects = filter === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === filter);

  // Bloquea el scroll del fondo cuando el modal está abierto
useEffect(() => {
  if (selectedProject) {
    document.body.style.overflow = 'hidden';
    // (Borramos el setCurrentMediaIndex de aquí)
  } else {
    document.body.style.overflow = 'unset';
  }
  return () => { document.body.style.overflow = 'unset'; };
}, [selectedProject]);

  // Funciones para el carrusel
  const nextMedia = (e) => {
    e.stopPropagation();
    setCurrentMediaIndex((prev) => (prev === selectedProject.media.length - 1 ? 0 : prev + 1));
  };

  const prevMedia = (e) => {
    e.stopPropagation();
    setCurrentMediaIndex((prev) => (prev === 0 ? selectedProject.media.length - 1 : prev - 1));
  };

  return (
    <div className="portfolio-page">
      
      {/* HEADER DE MORONI */}
      <header 
        className="portfolio-hero"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80')` }}
      >
        <div className="portfolio-hero__overlay"></div>
        <div className="container relative-z">
          <span className="overline">Portafolio</span>
          <motion.h1 initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}>
            Proyectos <span className="highlight">Destacados</span>
          </motion.h1>
          <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay: 0.2 }}>
            Nuestra experiencia técnica plasmada en obras reales.
          </motion.p>
        </div>
      </header>

      {/* GALERÍA */}
      <section className="gallery-section">
        <div className="container">
          
          <div className="filter-tabs">
            {categories.map(cat => (
              <button 
                key={cat} 
                className={filter === cat ? 'active' : ''}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="gallery-grid">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div 
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="gallery-item"
                  onClick={() => {
                  setCurrentMediaIndex(0); // <-- 1. Forzamos a que vuelva a la primera foto
                  setSelectedProject(project); // <-- 2. Abrimos el modal
}}
                >
                  <img src={project.img} alt={project.title} />
                  <div className="overlay">
                    <span className="tag">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p className="desc" style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', marginTop: '0.6rem' }}>Click para ver detalles</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* --- MODAL DE DETALLE DEL PRODUCTO CON CARRUSEL --- */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="project-modal-content"
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} 
            >
              {/* Botón Cerrar (sin lucide-react) */}
              <button className="close-btn" onClick={() => setSelectedProject(null)} style={{ fontSize: '1.2rem' }}>
                ✖
              </button>
              
              <div className="modal-grid">
                
                {/* LADO IZQUIERDO: CARRUSEL (SLIDER) */}
                <div className="modal-slider">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentMediaIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="media-container"
                    >
                      {selectedProject.media[currentMediaIndex].type === 'video' ? (
                        <video 
                          src={selectedProject.media[currentMediaIndex].url} 
                          controls 
                          autoPlay 
                          muted 
                          loop 
                        />
                      ) : (
                        <img 
                          src={selectedProject.media[currentMediaIndex].url} 
                          alt={`${selectedProject.title} - imagen ${currentMediaIndex + 1}`} 
                        />
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {/* Controles del Carrusel (Solo aparecen si hay más de 1 imagen/video) */}
                  {selectedProject.media.length > 1 && (
                    <>
                      {/* Botones Prev/Next (sin lucide-react) */}
                      <button className="slider-btn prev" onClick={prevMedia} style={{ fontSize: '1.2rem' }}>
                        ❮
                      </button>
                      <button className="slider-btn next" onClick={nextMedia} style={{ fontSize: '1.2rem' }}>
                        ❯
                      </button>
                      
                      <div className="slider-dots">
                        {selectedProject.media.map((_, idx) => (
                          <span 
                            key={idx} 
                            className={`dot ${idx === currentMediaIndex ? 'active' : ''}`}
                            onClick={() => setCurrentMediaIndex(idx)}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* LADO DERECHO: TEXTO Y ESPECIFICACIONES */}
                <div className="modal-text">
                  <span className="modal-tag">{selectedProject.category}</span>
                  <h2>{selectedProject.title}</h2>
                  <p className="description">{selectedProject.longDesc}</p>
                  
                  <div className="specs-container">
                    <h3>Detalles del proyecto:</h3>
                    <ul>
                      {selectedProject.specs?.map((spec, index) => (
                        <li key={index} style={{ alignItems: 'center' }}>
                          {/* Check (sin lucide-react) */}
                          <span style={{ color: 'var(--secondary)', marginRight: '0.8rem', fontSize: '1.2rem' }}>✔</span>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a 
                    href={`https://wa.me/51924353323?text=Hola,%20deseo%20más%20información%20sobre%20el%20proyecto:%20${encodeURIComponent(selectedProject.title)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="modal-cta"
                  >
                    Solicitar Cotización
                  </a>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Portfolio;
