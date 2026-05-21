import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import './Portfolio.scss'; // Importación de tu archivo de estilos separado

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

const categories = ['Todos', 'Drywall', 'Carpintería', 'Corporativo'];

// Base de datos enriquecida con múltiples medios (imágenes/videos)
const projects = [
{
id: 1,
title: 'Oficinas Tech Lima',
category: 'Drywall',
media: [
{ type: 'image', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80' },
{ type: 'image', url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80' }
],
longDesc: 'Implementación completa de oficinas corporativas utilizando el sistema constructivo Drywall. El proyecto incluyó el diseño de espacios abiertos, aislamiento termoacústico de alto rendimiento y acabados premium.',
specs: ['Área total intervenida: 450m²', 'Tiempo de ejecución: 45 días', 'Aislamiento acústico en salas (45dB)']
},
{
id: 2,
title: 'Mobiliario Retail',
category: 'Carpintería',
media: [
{ type: 'image', url: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80' },
{ type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
{ type: 'image', url: 'https://images.unsplash.com/photo-1449247613801-ab06418e2861?auto=format&fit=crop&w=1200&q=80' }
],
longDesc: 'Diseño, fabricación e instalación de mobiliario comercial a medida para tienda boutique. Se combinaron maderas nobles con detalles en metal y vidrio.',
specs: ['Madera de roble macizo y MDF enchapado', 'Acabado en poliuretano mate', 'Iluminación LED cálida integrada']
},
{
id: 3,
title: 'Ampliación Planta',
category: 'Drywall',
media: [
{ type: 'image', url: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=1200&q=80' }
],
longDesc: 'Construcción de nuevos módulos administrativos y zonas de descanso dentro de una planta industrial operativa.',
specs: ['Uso de placas RF y RH', 'Estructura metálica pesada', 'Alturas superiores a 4 metros']
},
{
id: 4,
title: 'Mantenimiento Sede Sur',
category: 'Corporativo',
media: [
{ type: 'image', url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80' },
{ type: 'image', url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80' }
],
longDesc: 'Servicio integral de mantenimiento preventivo y correctivo para instalaciones corporativas. Incluyó pintura general y ajuste de tabiquería.',
specs: ['Mantenimiento de 1200m²', 'Reparación de 45 estaciones de trabajo', 'Pintura epóxica en zonas de alto tránsito']
},
{
id: 5,
title: 'Puertas Acústicas',
category: 'Carpintería',
media: [
{ type: 'image', url: 'https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?auto=format&fit=crop&w=1200&q=80' }
],
longDesc: 'Fabricación e instalación de puertas acústicas especializadas para estudios de grabación y salas de directorio. Garantizan privacidad total.',
specs: ['Núcleo multicapa de alta densidad', 'Burletes perimetrales automotrices', 'Aislamiento certificado de hasta 50dB']
},
{
id: 6,
title: 'Tabiquería Clínica',
category: 'Drywall',
media: [
{ type: 'image', url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80' },
{ type: 'image', url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80' }
],
longDesc: 'División de espacios para consultorios médicos cumpliendo con las estrictas normativas del sector salud (MINSA).',
specs: ['Placas con tratamiento antibacteriano', 'Refuerzos para equipos de rayos X', 'Cumplimiento de norma técnica hospitalaria']
}
];

const filteredProjects = filter === 'Todos'
? projects
: projects.filter(p => p.category === filter);

// Lógica del Slider
const nextMedia = (e) => {
e.stopPropagation();
if (selectedProject) {
setMediaIndex((prev) => (prev === selectedProject.media.length - 1 ? 0 : prev + 1));
}
};

const prevMedia = (e) => {
e.stopPropagation();
if (selectedProject) {
setMediaIndex((prev) => (prev === 0 ? selectedProject.media.length - 1 : prev - 1));
}
};

const openProject = (project) => {
setSelectedProject(project);
setMediaIndex(0); // Reinicia el slider a la primera imagen
};

return (


  {/* HEADER */}
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
              onClick={() => openProject(project)}
            >
              <img src={project.media[0].url} alt={project.title} loading="lazy" />
              <div className="overlay">
                <span className="tag">{project.category}</span>
                <h3>{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  </section>

  {/* MODAL CON SLIDER */}
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
          initial={{ scale: 0.95, y: 30, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.95, y: 30, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()} 
        >
          <button className="close-btn" onClick={() => setSelectedProject(null)}>
            <X size={24} />
          </button>
          
          <div className="modal-scrollable">
            <div className="modal-grid">
              
              {/* SLIDER CONTENEDOR */}
              <div className="modal-media-container">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={mediaIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
                  >
                    {selectedProject.media[mediaIndex].type === 'video' ? (
                      <video 
                        src={selectedProject.media[mediaIndex].url} 
                        controls 
                        autoPlay 
                        muted
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      />
                    ) : (
                      <img 
                        src={selectedProject.media[mediaIndex].url} 
                        alt={`${selectedProject.title} - Vista ${mediaIndex + 1}`} 
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      />
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Controles del Slider */}
                {selectedProject.media.length > 1 && (
                  <>
                    <button className="slider-btn prev" onClick={prevMedia}>
                      <ChevronLeft size={28} />
                    </button>
                    <button className="slider-btn next" onClick={nextMedia}>
                      <ChevronRight size={28} />
                    </button>
                    
                    <div className="slider-dots">
                      {selectedProject.media.map((_, idx) => (
                        <button 
                          key={idx}
                          className={`slider-dot ${idx === mediaIndex ? 'active' : ''}`}
                          onClick={() => setMediaIndex(idx)}
                          aria-label={`Ver slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* INFORMACIÓN DEL PROYECTO */}
              <div className="modal-text">
                <span className="modal-tag">{selectedProject.category}</span>
                <h2>{selectedProject.title}</h2>
                <p className="description">{selectedProject.longDesc}</p>
                
                <div className="specs-container">
                  <h3>Especificaciones Técnicas:</h3>
                  <ul>
                    {selectedProject.specs?.map((spec, index) => (
                      <li key={index}>
                        <CheckCircle size={18} color="var(--secondary)" style={{ flexShrink: 0 }} /> 
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href={`https://wa.me/51932528794?text=Hola,%20deseo%20cotizar%20información%20sobre%20el%20proyecto:%20${encodeURIComponent(selectedProject.title)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="modal-cta"
                >
                  Solicitar Cotización
                </a>
              </div>

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
