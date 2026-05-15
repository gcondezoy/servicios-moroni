import React from 'react';
import './About.scss';
// Cambiamos FaTelescope por FaBinoculars (Binoculares) o FaEye (Ojo)
import { FaBullseye, FaLightbulb } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero de Historia con fondo fotográfico */}
      <section className="about-hero">
        <img 
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80" 
          alt="Construcción e Ingeniería" 
          className="about-hero__bg"
        />
        <div className="about-hero__overlay"></div>

        <div className="container">
          <span className="overline">Nuestra Historia</span>
          <h1>Desde 2014 construyendo <br/><span className="highlight">confianza en todo el Perú</span></h1>
          <p>
            Constituida en Trujillo, Servicios Moroni SRL nació con el firme propósito de ofrecer soluciones técnicas seguras y sostenibles en los sectores residencial, comercial e industrial.
          </p>
        </div>
      </section>

      {/* SECCIÓN MISIÓN Y VISIÓN (Actualizada con Iconos Pro) */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="mv-grid">
            
            {/* Tarjeta de Misión */}
            <div className="mv-item">
              <div className="mv-icon">
                <FaBullseye /> {/* Icono de Meta */}
              </div>
              <div className="mv-content">
                <h2>Nuestra Misión</h2>
                <p>Brindar soluciones técnicas integrales en ingeniería de interiores y mantenimiento, cumpliendo con los más altos estándares de calidad y seguridad para potenciar los espacios de nuestros clientes.</p>
              </div>
            </div>

            {/* Tarjeta de Visión */}
            <div className="mv-item">
              <div className="mv-icon">
                    <FaLightbulb /> {/* Asegúrate de que este nombre sea igual al del import */}
            </div>
              <div className="mv-content">
                <h2>Nuestra Visión</h2>
                <p>Ser reconocidos a nivel nacional como la empresa líder y aliada estratégica en el sector de acabados y mantenimiento corporativo, innovando constantemente para superar las expectativas del mercado.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* El Equipo con fotos provisionales y animaciones */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Liderazgo y Respaldo Técnico</h2>
            <p>Contamos con un equipo multidisciplinario que garantiza el cumplimiento de los más altos estándares normativos.</p>
          </div>

          <div className="team-profiles">
            <div className="profile-card">
              <div className="profile-image-placeholder">
                {/* Avatar provisional generado con iniciales y color de marca */}
                <img src="gerente.png" alt="Julio Alberto Nunja Alfaro" />
              </div>
              <div className="profile-info">
                <h3>Julio Alberto Nunja Alfaro</h3>
                <span className="position">Gerente General</span>
                <p>
                  Administrador de Empresas y Técnico Electricista con amplia experiencia gestionando proyectos críticos en el sector civil y minero.
                </p>
              </div>
            </div>

            <div className="profile-card">
              <div className="profile-image-placeholder">
                <img src="/ingcivil.png" alt="Julio Helaman Nunja Llucho" />
              </div>
              <div className="profile-info">
                <h3>Julio Helaman Nunja Llucho</h3>
                <span className="position">Ingeniero Civil | CIP: 380415</span>
                <p>
                  Especialista en proyectos de izaje, montaje de tuberías y mantenimiento industrial. Experto capacitador en seguridad aeronáutica e industrial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;