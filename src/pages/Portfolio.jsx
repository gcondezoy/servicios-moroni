import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import './Portfolio.scss';

const Portfolio = () => {
const [filter, setFilter] = useState('Todos');
const [selectedProject, setSelectedProject] = useState(null);
const [mediaIndex, setMediaIndex] = useState(0);

// Bloquea el scroll del fondo cuando el modal está abierto
useEffect(() => {
if (selectedProject) {
document.body.style.overflow = 'hidden';
} else {
document.body.style.overflow = 'unset';
}
return () => { document.body.style.overflow = 'unset'; };
}, [selectedProject]);

// Resetea el índice del slider al abrir un nuevo proyecto
useEffect(() => {
setMediaIndex(0);
}, [selectedProject]);

const categories = ['Todos', 'Drywall', 'Carpintería', 'Corporativo'];

// ARRAY ACTUALIZADO: Se cambió 'img' por 'media' (array) y se agregaron detalles para el modal
const projects = [
{
id: 1,
title: 'Oficinas Tech Lima',
category: 'Drywall',
media: [
{ type: 'image', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80' },
{ type: 'image', url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80' } // Segunda foto de ejemplo
],
desc: 'Tabiquería y cielos rasos para corporativo.',
longDesc: 'Implementación completa de sistema drywall para oficinas tecnológicas. Incluye tabiquería con aislamiento acústico de alta densidad y falso cielo raso con diseño arquitectónico.',
specs: ['Aislamiento termoacústico en muros', 'Estructura de acero galvanizado pesado', 'Acabado nivel 5 listo para pintar', 'Modulación para luminarias LED']
},
{
id: 2,
title: 'Mobiliario Retail',
category: 'Carpintería',
media: [
{ type: 'image', url: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80' },
{ type: 'image', url: 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&w=800&q=80' }
],
desc: 'Muebles de exhibición a medida.',
longDesc: 'Fabricación e instalación de mobiliario comercial en melamina y madera para tiendas retail. Diseñado para maximizar la exhibición de productos soportando alto tráfico.',
specs: ['Melamina RH de 18mm de espesor', 'Tapacantos gruesos adheridos al calor', 'Herrajes de cierre suave', 'Iluminación LED integrada oculta']
},
{
id: 3,
title: 'Ampliación Planta',
category: 'Drywall',
media: [
{ type: 'image', url: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=800&q=80' }
],
desc: 'Divisiones industriales de rápida ejecución.',
longDesc: 'Creación de nuevos ambientes administrativos dentro de nave industrial utilizando placas de yeso resistentes a impactos y humedad, acelerando los tiempos de obra.',
specs: ['Placas RH (Resistentes a la Humedad)', 'Placas RF (Resistentes al Fuego)', 'Refuerzos internos para montaje de equipos', 'Sellado perimetral acústico']
},
{
id: 4,
title: 'Mantenimiento Sede Sur',
category: 'Corporativo',
media: [
{ type: 'image', url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80' }
],
desc: 'Renovación integral de instalaciones.',
longDesc: 'Servicio de mantenimiento preventivo y correctivo para sede corporativa. Incluyó resane de muros, pintura general, ajuste de mobiliario y revisión de tabiquería.',
specs: ['Tratamiento de juntas en drywall', 'Aplicación de pintura epóxica e hidrofugante', 'Ajuste de bisagras y correderas', 'Limpieza profunda post-obra']
},
{
id: 5,
title: 'Puertas Acústicas',
category: 'Carpintería',
media: [
{ type: 'image', url: 'https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?auto=format&fit=crop&w=800&q=80' }
],
desc: 'Soluciones de aislamiento sonoro.',
longDesc: 'Fabricación de puertas de madera maciza con núcleo acústico para salas de reuniones y auditorios, garantizando la privacidad y reduciendo la transmisión de decibelios.',
specs: ['Núcleo de lana de roca de alta densidad', 'Sellos perimetrales de guillotina automática', 'Marcos de madera estructural reforzada', 'Acabado en poliuretano mate']
},
{
id: 6,
title: 'Tabiquería Clínica',
category: 'Drywall',
media: [
{ type: 'image', url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80' }
],
desc: 'Divisiones asépticas y seguras.',
longDesc: 'Instalación de sistema drywall para centro de salud cumpliendo normativas sanitarias. Uso exclusivo de placas anti-hongos y sellos herméticos para evitar contaminación.',
specs: ['Placas Glass-Rey para máxima asepsia', 'Estructura con protección anticorrosiva', 'Zócalos sanitarios curvos', 'Pintura antibacteriana de grado hospitalario']
}
];

const filteredProjects = filter === 'Todos'
? projects
: projects.filter(p => p.category === filter);

// Funciones para el Slider de Imágenes
const nextMedia = (e) => {
e.stopPropagation();
setMediaIndex((prev) => (prev === selectedProject.media.length - 1 ? 0 : prev + 1));
};

const prevMedia = (e) => {
e.stopPropagation();
setMediaIndex((prev) => (prev === 0 ? selectedProject.media.length - 1 : prev - 1));
};

return (


  {/* HEADER ACTUALIZADO */}
  <header 
    className="portfolio-hero"
    style={{ 
      backgroundImage: `url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80')` 
    }}
  >
    <div className="portfolio-hero__overlay"></div>

    <div className="container relative-z">
      <span className="overline">Portafolio</span>
      <motion.h1 initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}>
        Proyectos <span className="highlight">Destacados</span>
      </motion.h1>
      <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay: 0.2 }}>
        Nuestra experiencia técnica plasmada en obras reales. Haz clic en cada proyecto para ver detalles y galería.
      </motion.p>
    </div>
  </header>

  {/* SECCIÓN DE GALERÍA */}
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
              onClick={() => setSelectedProject(project)}
            >
              {/* Se muestra la primera imagen del array media */}
              <img src={project.media[0].url} alt={project.title} loading="lazy" />
              <div className="overlay">
                <span className="tag">{project.category}</span>
                <h3>{project.title}</h3>
                <p className="desc">Click para ver más</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

    </div>
  </section>

  {/* MODAL DE DETALLES Y SLIDER */}
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
          <button className="close-btn" onClick={() => setSelectedProject(null)}>
            <X size={24} />
          </button>
          
          <div className="modal-grid">
            
            {/* ZONA DE SLIDER DE MEDIOS */}
            <div className="modal-image-slider">
              <AnimatePresence mode='wait'>
                <motion.div
                  key={mediaIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="slider-item"
                >
                  {selectedProject.media[mediaIndex].type === 'video' ? (
                    <video 
                      src={selectedProject.media[mediaIndex].url} 
                      controls 
                      autoPlay 
                      muted 
                      loop 
                    />
                  ) : (
                    <img 
                      src={selectedProject.media[mediaIndex].url} 
                      alt={`${selectedProject.title} - Foto ${mediaIndex + 1}`} 
                    />
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Controles del slider (solo aparecen si hay más de 1 imagen) */}
              {selectedProject.media.length > 1 && (
                <>
                  <button className="slider-btn prev" onClick={prevMedia}>
                    <ChevronLeft size={28} />
                  </button>
                  <button className="slider-btn next" onClick={nextMedia}>
                    <ChevronRight size={28} />
                  </button>
                  
                  {/* Paginación de puntitos */}
                  <div className="slider-dots">
                    {selectedProject.media.map((_, idx) => (
                      <div 
                        key={idx} 
                        className={`dot ${idx === mediaIndex ? 'active' : ''}`}
                        onClick={(e) => { e.stopPropagation(); setMediaIndex(idx); }}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* ZONA DE TEXTO Y ESPECIFICACIONES */}
            <div className="modal-text">
              <span className="modal-tag">{selectedProject.category}</span>
              <h2>{selectedProject.title}</h2>
              <p className="description">{selectedProject.longDesc}</p>
              
              <div className="specs-container">
                <h3>Detalles Técnicos:</h3>
                <ul>
                  {selectedProject.specs?.map((spec, index) => (
                    <li key={index}>
                      {/* Usa el color primary de tu CSS para el check */}
                      <CheckCircle size={18} color="var(--primary)" style={{ flexShrink: 0 }} /> 
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href={`https://wa.me/51932528794?text=Hola,%20deseo%20cotizar%20sobre%20el%20proyecto:%20${encodeURIComponent(selectedProject.title)}`}
                target="_blank"
                rel="noreferrer"
                className="modal-cta"
              >
                Solicitar Cotización Similar
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
