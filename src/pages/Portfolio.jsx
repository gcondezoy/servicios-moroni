import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Portfolio.scss';

const Portfolio = () => {
  const [filter, setFilter] = useState('Todos');

  const categories = ['Todos', 'Drywall', 'Carpintería', 'Corporativo'];

  const projects = [
    { id: 1, title: 'Oficinas Tech Lima', category: 'Drywall', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80' },
    { id: 2, title: 'Mobiliario Retail', category: 'Carpintería', img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80' },
    { id: 3, title: 'Ampliación Planta', category: 'Drywall', img: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=800&q=80' },
    { id: 4, title: 'Mantenimiento Sede Sur', category: 'Corporativo', img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80' },
    { id: 5, title: 'Puertas Acústicas', category: 'Carpintería', img: 'https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?auto=format&fit=crop&w=800&q=80' },
    { id: 6, title: 'Tabiquería Clínica', category: 'Drywall', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80' },
  ];

  const filteredProjects = filter === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="portfolio-page">
      
      {/* HEADER ACTUALIZADO: Imagen por CSS inline (Método más seguro) */}
      <header 
        className="portfolio-hero"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80')` 
        }}
      >
        {/* Capa oscura (Overlay) */}
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

      {/* SECCIÓN DE GALERÍA INTACTA */}
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
                >
                  <img src={project.img} alt={project.title} />
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
    </div>
  );
};

export default Portfolio;