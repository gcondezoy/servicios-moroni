import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import { FaHardHat, FaBuilding, FaShieldAlt } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home-a1">
      {/* 1. HERO SECTION */}
      <section className="hero-a1">
        <img 
          src="/fondo-hero.jpg" 
          alt="Construcción e Ingeniería" 
          className="hero-a1__bg"
        />
        <div className="hero-a1__overlay"></div>
        
        <div className="container">
          <div className="hero-a1__content">
            <span className="overline">SERVICIOS MORONI SRL</span>
            <h1 className="title">
              Ingeniería en cada detalle. <br />
              <span className="highlight">Acabados de precisión.</span>
            </h1>
            <p className="description">
              Soluciones integrales en construcción civil, mantenimiento, seguridad industrial y andamios Layher a nivel nacional.
            </p>
            <Link to="/proyectos" className="btn-solid">
              Ver Nuestros Proyectos <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. DATA-DRIVEN METRICS */}
      <section className="metrics-section">
        <div className="container">
          <div className="metrics-grid">
            <div className="metric-item">
              <span className="metric-icon"><FaHardHat /></span>
              <div className="metric-data">
                <div className="number">+10</div>
                <div className="label">Años de Trayectoria</div>
              </div>
            </div>
            <div className="metric-item">
              <span className="metric-icon"><FaBuilding /></span>
              <div className="metric-data">
                <div className="number">350+</div>
                <div className="label">Proyectos Entregados</div>
              </div>
            </div>
            <div className="metric-item">
              <span className="metric-icon"><FaShieldAlt /></span>
              <div className="metric-data">
                <div className="number">100%</div>
                <div className="label">Garantía de Calidad</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICIOS */}
      <section className="services-a1">
        <div className="container">
          <div className="section-header">
            <h2>Nuestras Especialidades</h2>
            <p>Ejecución impecable para los sectores residencial, industrial y minero.</p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80" alt="Carpintería" />
              </div>
              <div className="card-content">
                <span className="category">Estructuras</span>
                <h3>Construcción y Drywall</h3>
                <p>Desarrollo de edificaciones, obras civiles, estructuras metálicas y sistema drywall premium.</p>
              </div>
            </div>

            <div className="service-card">
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=800&q=80" alt="Andamios" />
              </div>
              <div className="card-content">
                <span className="category">Equipamiento</span>
                <h3>Andamios Layher</h3>
                <p>Alquiler, montaje y desmontaje de andamios Layher con personal técnico certificado para minería e industria.</p>
              </div>
            </div>

            <div className="service-card">
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80" alt="Seguridad" />
              </div>
              <div className="card-content">
                <span className="category">Seguridad</span>
                <h3>Seguridad Aeronáutica</h3>
                <p>Fabricación de mangas de viento, mástiles y bocinas de acero inoxidable resistentes a condiciones extremas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLIENTES (Grelha de Logótipos Reais) */}
      <section className="clients-a1">
        <div className="container">
          <h4 className="clients-title">EMPRESAS QUE CONFÍAN EN NOSOTROS</h4>
          <div className="clients-logo-grid">
            <div className="client-logo">
              <img src="Puerto de Paracas.png" alt="Puerto de Paracas" />
            </div>
            <div className="client-logo">
              <img src="/Resister logo.png" alt="Resiter" />
            </div>
            <div className="client-logo">
              <img src="/consorcio mgp.png" alt="Consorcio MgP" />
            </div>
            <div className="client-logo">
              <img src="/Aspersud.png" alt="ASPERSUD" />
            </div>
            <div className="client-logo">
              <img src="/FireSecurity.png" alt="Fire Security S.R.L" />
            </div>
            <div className="client-logo">
              <img src="/JyMService.png" alt="JSM SAC" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="cta-a1">
        <div className="container">
          <div className="cta-box">
            <h2>¿Listo para empezar tu próximo proyecto?</h2>
            <p>Contáctanos hoy mismo para una asesoría técnica especializada.</p>
            <Link to="/contacto" className="btn-solid">Cotizar Proyecto</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;