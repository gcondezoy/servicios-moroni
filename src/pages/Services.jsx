import React from 'react';
import './Services.scss';

const Services = () => {
  // 💡 CATÁLOGO FINAL: 23 servicios con las rutas locales exactas en la raíz de /public
  const serviceCategories = [
    {
      title: "Construcción y Obras Civiles",
      services: [
        { title: "Expedientes Técnicos", desc: "Elaboración de expedientes completos para proyectos de edificación, habilitación urbana y saneamiento.", img: "/expediente-tecnico.jpg" },
        { title: "Diseño de Interiores", desc: "Diseños modernos, funcionales y personalizados para cada espacio.", img: "/diseno-de-interiores.jpg" },
        { title: "Obras Civiles", desc: "Construcción de viviendas, edificios, locales comerciales e industriales, obras públicas y privadas.", img: "/obras-civiles.jpg" },
        { title: "Obras en Proceso y Ejecución", desc: "Ejecución y supervisión de obras con altos estándares de calidad y seguridad.", img: "/obras-en-ejecucion.jpg" },
        { title: "Venta de Material de Construcción", desc: "Materiales de calidad para todo tipo de construcción.", img: "/venta-de-materiales.jpg" },
        { title: "Cercos Prefabricados", desc: "Venta e instalación de cercos prefabricados de concreto resistentes y duraderos.", img: "/cercos-prefabricados.jpg" }
      ]
    },
    {
      title: "Servicios Integrales y Mantenimiento",
      services: [
        { title: "Pintura", desc: "Interiores y exteriores, acabados profesionales.", img: "/pintura.jpg" },
        { title: "Gasfitería", desc: "Instalaciones, reparaciones y mantenimiento sanitario.", img: "/gasfiteria.jpg" },
        { title: "Electricidad", desc: "Instalaciones eléctricas, mantenimiento preventivo y correctivo.", img: "/electricidad.jfif" },
        { title: "Drywall", desc: "Divisiones, cielos rasos y acabados modernos.", img: "/drywall.jpg" },
        { title: "Carpintería Metálica", desc: "Fabricación e instalación de estructuras metálicas, puertas, rejas y más.", img: "/carpinteria-metalica.jpg" },
        { title: "Carpintería en Madera y Melamina", desc: "Muebles a medida, closets, reposteros, puertas y más.", img: "/melamina-carpinteria.jpg" },
        { title: "Jardinería", desc: "Diseño, instalación y mantenimiento de áreas verdes.", img: "/Servicios hogar.jpg" },
        { title: "Mantenimiento de Equipos", desc: "Revisión, reparación y mantenimiento de equipos en general.", img: "/mantenimiento-de-equipos.jpg" },
        { title: "Remodelaciones y Servicios Múltiples", desc: "Soluciones completas para tu hogar o negocio.", img: "/remodelaciones-y-servicios.jpg" }
      ]
    },
    {
      title: "Limpieza y Saneamiento Ambiental",
      services: [
        { title: "Limpieza Integral", desc: "Limpieza profunda de hogares, oficinas, empresas y locales comerciales.", img: "/limpieza-integral.jfif" },
        { title: "Desinfección de Ambientes", desc: "Eliminamos bacterias, virus y gérmenes para ambientes seguros y saludables.", img: "/desinfeccion-de-ambientes.jpg" },
        { title: "Fumigación Profesional", desc: "Control efectivo de insectos, roedores y plagas urbanas con productos certificados.", img: "/fumigación.png" }
      ]
    },
    {
      title: "Soluciones Aeronáuticas e Industriales",
      services: [
        { title: "Mangas de Viento", desc: "Venta, fabricación e instalación para aeropuertos, helipuertos, minería e industria.", img: "/mangas-de-viento.jpg" },
        { title: "Aros en Acero Inoxidable 304", desc: "Estructuras resistentes a la corrosión, elaboradas con altos estándares de calidad.", img: "/aro-de-acero.png" },
        { title: "Mástiles Metálicos", desc: "Fabricación e instalación de mástiles para mangas de viento y aplicaciones industriales.", img: "/mastiles.png" },
        { title: "Equipos de Protección (EPP)", desc: "Venta de implementos de seguridad industrial para trabajos de alto riesgo.", img: "/equipos-epp.png" },
        { title: "Soluciones Metalmecánicas", desc: "Diseño y fabricación de estructuras metálicas para aplicaciones aeronáuticas e industriales.", img: "/soluciones-metalmecanicas.png" }
      ]
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <img 
          src="https://images.unsplash.com/photo-1508873699372-7aeab60b44ab?auto=format&fit=crop&w=1920&q=80" 
          alt="Servicios de Construcción" 
          className="services-hero__bg"
        />
        <div className="services-hero__overlay"></div>

        <div className="container">
          <span className="overline">Nuestras Especialidades</span>
          <h1>Soluciones integrales <br/><span className="highlight">para tu proyecto</span></h1>
          <p>
            Brindamos servicios profesionales en todas las etapas, desde la planificación hasta la ejecución, garantizando calidad, seguridad y compromiso en hogares y empresas.
          </p>
        </div>
      </section>

      {/* Grid de Servicios Dinámico */}
      <section className="services-catalog">
        <div className="container">
          
          {serviceCategories.map((category, index) => (
            <div className="category-block" key={index}>
              <h2 className="category-title">{category.title}</h2>
              
              <div className="catalog-grid">
                {category.services.map((service, idx) => (
                  <div className="catalog-card" key={idx}>
                    <div className="card-img-wrap">
                      {/* El loading="lazy" ayuda a que la página cargue rapidísimo aunque sean 23 fotos */}
                      <img src={service.img} alt={service.title} loading="lazy" />
                    </div>
                    <div className="card-content">
                      <h3>{service.title}</h3>
                      <p>{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
};

export default Services;
