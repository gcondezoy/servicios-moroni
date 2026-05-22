import React from 'react';
import './Services.scss';

const Services = () => {
  // 💡 ARRAY DE DATOS: Extraído exactamente de los 4 flyers del cliente. 
  // Las imágenes son de Unsplash para que no quede en blanco, luego puedes cambiarlas por las reales en tu carpeta /public
  // 💡 CATÁLOGO COMPLETO CON ENLACES 100% OPERATIVOS PARA VERCEL
const serviceCategories = [
    {
      title: "Construcción y Obras Civiles",
      services: [
        { title: "Expedientes Técnicos", desc: "Elaboración de expedientes completos para proyectos de edificación, habilitación urbana y saneamiento.", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80" },
        { title: "Diseño de Interiores", desc: "Diseños modernos, funcionales y personalizados para cada espacio.", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80" },
        { title: "Obras Civiles", desc: "Construcción de viviendas, edificios, locales comerciales e industriales, obras públicas y privadas.", img: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&w=800&q=80" },
        { title: "Obras en Proceso y Ejecución", desc: "Ejecución y supervisión de obras con altos estándares de calidad y seguridad.", img: "https://images.unsplash.com/photo-1504307651254-35680f356f58?auto=format&fit=crop&w=800&q=80" },
        { title: "Venta de Material de Construcción", desc: "Materiales de calidad para todo tipo de construcción.", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80" },
        { title: "Cercos Prefabricados", desc: "Venta e instalación de cercos prefabricados de concreto resistentes y duraderos.", img: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80" }
      ]
    },
    {
      title: "Servicios Integrales y Mantenimiento",
      services: [
        { title: "Pintura", desc: "Interiores y exteriores, acabados profesionales.", img: "https://images.unsplash.com/photo-1562259929-b7e181d8d00d?auto=format&fit=crop&w=800&q=80" },
        { title: "Gasfitería", desc: "Instalaciones, reparaciones y mantenimiento sanitario.", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80" },
        { title: "Electricidad", desc: "Instalaciones eléctricas, mantenimiento preventivo y correctivo.", img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80" },
        { title: "Drywall", desc: "Divisiones, cielos rasos y acabados modernos.", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80" },
        { title: "Carpintería Metálica", desc: "Fabricación e instalación de estructuras metálicas, puertas, rejas y más.", img: "https://images.unsplash.com/photo-1504917595217-d4bfd27d92fb?auto=format&fit=crop&w=800&q=80" },
        { title: "Carpintería en Madera y Melamina", desc: "Muebles a medida, closets, reposteros, puertas y más.", img: "https://images.unsplash.com/photo-1610555356070-d0efb6505f81?auto=format&fit=crop&w=800&q=80" },
        { title: "Jardinería", desc: "Diseño, instalación y mantenimiento de áreas verdes.", img: "https://images.unsplash.com/photo-1416879598555-2272afaf9634?auto=format&fit=crop&w=800&q=80" },
        { title: "Mantenimiento de Equipos", desc: "Revisión, reparación y mantenimiento de equipos en general.", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80" },
        { title: "Remodelaciones y Servicios Múltiples", desc: "Soluciones completas para tu hogar o negocio.", img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80" }
      ]
    },
    {
      title: "Limpieza y Saneamiento Ambiental",
      services: [
        { title: "Limpieza Integral", desc: "Limpieza profunda de hogares, oficinas, empresas y locales comerciales.", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80" },
        { title: "Desinfección de Ambientes", desc: "Eliminamos bacterias, virus y gérmenes para ambientes seguros y saludables.", img: "https://images.unsplash.com/photo-1584813470613-5b1c1cad3d69?auto=format&fit=crop&w=800&q=80" },
        { title: "Fumigación Profesional", desc: "Control efectivo de insectos, roedores y plagas urbanas con productos certificados.", img: "https://images.unsplash.com/photo-1584467541268-b040f83be3fd?auto=format&fit=crop&w=800&q=80" }
      ]
    },
    {
      title: "Soluciones Aeronáuticas e Industriales",
      services: [
        { title: "Mangas de Viento", desc: "Venta, fabricación e instalación para aeropuertos, helipuertos, minería e industria.", img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80" },
        { title: "Aros en Acero Inoxidable 304", desc: "Estructuras resistentes a la corrosión, elaboradas con altos estándares de calidad.", img: "https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=800&q=80" },
        { title: "Mástiles Metálicos", desc: "Fabricación e instalación de mástiles para mangas de viento y aplicaciones industriales.", img: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80" },
        { title: "Equipos de Protección (EPP)", desc: "Venta de implementos de seguridad industrial para trabajos de alto riesgo.", img: "https://images.unsplash.com/photo-1590579491081-4b3604f2f451?auto=format&fit=crop&w=800&q=80" },
        { title: "Soluciones Metalmecánicas", desc: "Diseño y fabricación de estructuras metálicas para aplicaciones aeronáuticas e industriales.", img: "https://images.unsplash.com/photo-1565514107198-d1a811d04130?auto=format&fit=crop&w=800&q=80" }
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
          <span className="overline">Catálogo de Servicios</span>
          {/* Actualizamos el texto del Hero para que coincida con el Flyer principal */}
          <h1>Soluciones integrales <br/><span className="highlight">para tu proyecto</span></h1>
          <p>
            Brindamos servicios profesionales en todas las etapas, desde la planificación hasta la ejecución, garantizando calidad, seguridad y compromiso en hogares y empresas.
          </p>
        </div>
      </section>

      {/* Grid de Servicios Dinámico */}
      <section className="services-catalog">
        <div className="container">
          
          {/* Hacemos un map de las categorías para generar los bloques */}
          {serviceCategories.map((category, index) => (
            <div className="category-block" key={index}>
              <h2 className="category-title">{category.title}</h2>
              
              <div className="catalog-grid">
                {/* Hacemos un map de los servicios dentro de cada categoría */}
                {category.services.map((service, idx) => (
                  <div className="catalog-card" key={idx}>
                    <div className="card-img-wrap">
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
