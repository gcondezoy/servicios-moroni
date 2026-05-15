import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.scss';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = 'unset';
  }, [location]);

  const toggleMenu = () => {
    if (!menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-is-open' : ''}`}>
      <div className="container">
        
        <Link to="/" className="nav-logo">
          <img src="/logo.png" alt="Servicios Moroni SRL" />
        </Link>

        <div className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <div className="nav-links">
            <NavLink to="/" end>Inicio</NavLink>
            <NavLink to="/nosotros">Nosotros</NavLink>
            <NavLink to="/servicios">Servicios</NavLink>
            <NavLink to="/proyectos">Proyectos</NavLink>
            {/* El botón de contacto */}
            <Link to="/contacto" className="mobile-cta">
              Contáctanos
            </Link>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;