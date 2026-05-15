import React from 'react';
import './Services.scss';

const Services = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        {/* Agregamos la foto de fondo */}
        <img 
          src="https://images.unsplash.com/photo-1508873699372-7aeab60b44ab?auto=format&fit=crop&w=1920&q=80" 
          alt="Servicios de Construcción" 
          className="services-hero__bg"
        />
        {/* Capa oscura */}
        <div className="services-hero__overlay"></div>

        <div className="container">
          <span className="overline">Nuestras Especialidades</span>
          <h1>Soluciones integrales en construcción <br/><span className="highlight">y andamios Layher</span></h1>
          <p>
            Ejecutamos proyectos para los sectores civil, industrial y minero cumpliendo estrictamente con los estándares de calidad y seguridad.
          </p>
        </div>
      </section>

      {/* Grid de Servicios con Imágenes */}
      <section className="services-catalog">
        <div className="container">
          
          {/* Categoría 1: Obras y Acabados */}
          <div className="category-block">
            <h2 className="category-title">Obras y Acabados</h2>
            <div className="catalog-grid">
              <div className="catalog-card">
                <div className="card-img-wrap">
                  <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80" alt="Construcción de edificaciones" />
                </div>
                <div className="card-content">
                  <h3>Construcción de edificaciones</h3>
                  <p>Desarrollo de proyectos de viviendas, edificios, obras civiles y estructuras metálicas.</p>
                </div>
              </div>
              <div className="catalog-card">
                <div className="card-img-wrap">
                  <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80" alt="Carpintería y acabados" />
                </div>
                <div className="card-content">
                  <h3>Carpintería y acabados</h3>
                  <p>Especialistas en carpintería metálica, melamina, sistema drywall premium y acabados de precisión.</p>
                </div>
              </div>
              <div className="catalog-card">
                <div className="card-img-wrap">
                  <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80" alt="Pintura interior y exterior" />
                </div>
                <div className="card-content">
                  <h3>Pintura interior y exterior</h3>
                  <p>Aplicación de recubrimientos y pintura profesional para infraestructuras residenciales e industriales.</p>
                </div>
              </div>
              <div className="catalog-card">
                <div className="card-img-wrap">
                  <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80" alt="Paisajismo y áreas verdes" />
                </div>
                <div className="card-content">
                  <h3>Paisajismo y áreas verdes</h3>
                  <p>Recuperación de áreas verdes, paisajismo y limpieza y rehabilitación de canales de regadío.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Categoría 2: Industrial y Mantenimiento */}
          <div className="category-block">
            <h2 className="category-title">Industrial y Mantenimiento</h2>
            <div className="catalog-grid">
              <div className="catalog-card">
                <div className="card-img-wrap">
                  <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80" alt="Mantenimiento integral" />
                </div>
                <div className="card-content">
                  <h3>Mantenimiento integral</h3>
                  <p>Servicios preventivos y correctivos abarcando sistemas eléctricos, sanitarios y contra incendio.</p>
                </div>
              </div>
              <div className="catalog-card">
                <div className="card-img-wrap">
                  <img src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=800&q=80" alt="Climatización" />
                </div>
                <div className="card-content">
                  <h3>Climatización</h3>
                  <p>Instalación y mantenimiento especializado de sistemas de aire acondicionado industrial y comercial.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Categoría 3: Servicios Especializados */}
          <div className="category-block">
            <h2 className="category-title">Servicios Especializados</h2>
            <div className="catalog-grid">
              <div className="catalog-card">
                <div className="card-img-wrap">
                  <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80" alt="Seguridad aeronáutica e industrial" />
                </div>
                <div className="card-content">
                  <h3>Seguridad aeronáutica e industrial</h3>
                  <p>Fabricación de mangas de viento, mástiles de acero inoxidable y provisión de EPP para minería.</p>
                </div>
              </div>
              <div className="catalog-card">
                <div className="card-img-wrap">
                  <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80" alt="Planificación y Ejecución" />
                </div>
                <div className="card-content">
                  <h3>Planificación y Ejecución</h3>
                  <p>Gestión integral de proyectos en general, asegurando eficiencia operativa de principio a fin.</p>
                </div>
              </div>
              <div className="catalog-card">
                <div className="card-img-wrap">
                  <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80" alt="Trámites Documentarios" />
                </div>
                <div className="card-content">
                  <h3>Trámites Documentarios</h3>
                  <p>Gestión de licencias, permisos en general y saneamiento legal en edificaciones.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Services;