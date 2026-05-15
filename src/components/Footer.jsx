import React from 'react';
import { Link } from 'react-router-dom';
// Importamos los iconos reales de FontAwesome desde react-icons
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          
          {/* Columna 1: Marca */}
          <div className="footer__brand">
            <div className="footer-logo">
              {/* Asegúrate de usar la ruta correcta de tu logo transparente */}
              <img src="/logo.png" alt="Servicios Moroni SRL" />
            </div>
            <p>Especialistas en ingeniería de interiores, estructuras metálicas y mantenimiento corporativo a nivel nacional.</p>
          </div>

          {/* Columna 2: Enlaces */}
          <div className="footer__links">
            <h3>Enlaces Rápidos</h3>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/nosotros">Nosotros</Link></li>
              <li><Link to="/servicios">Servicios</Link></li>
              <li><Link to="/proyectos">Proyectos</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div className="footer__contact">
            <h3>Contáctanos</h3>
            <p>Av. Ejemplo 123, Trujillo - Perú</p>
            <p>nunjajulio@gmail.com</p>
            <p className="phone">+51 924 353 323</p>
          </div>

          {/* Columna 4: Redes Sociales (AQUÍ ESTÁ EL CAMBIO) */}
          <div className="footer__social">
            <h3>Síguenos</h3>
            <div className="social-links">
              {/* Usamos iconos reales y clases específicas para los colores de hover */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                <FaLinkedinIn />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p>&copy; {currentYear} Servicios MORONI S.R.L. | RUC: 20438545183. Todos los derechos reservados.</p>
          <p className="dev">Desarrollado por Guillermo Condezo - Desarrollador Web y Analista de Datos</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;