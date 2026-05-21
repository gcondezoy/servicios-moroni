import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import './Contact.scss';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    alert("¡Mensaje enviado con éxito! Nos contactaremos contigo pronto.");
  };

  return (
    <div className="contact-page">
      
      {/* 1. HERO DE CONTACTO (Con imagen y filtro) */}
      <header className="contact-hero">
        <img 
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80" 
          alt="Contacto Servicios Moroni" 
          className="contact-hero__bg"
        />
        <div className="contact-hero__overlay"></div>

        <div className="container relative-z">
          <span className="overline">Contacto</span>
          <motion.h1 initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}>
            Iniciemos tu <span className="highlight">Proyecto</span>
          </motion.h1>
          <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay: 0.2 }}>
            Cotiza con nosotros. Nuestro equipo de ingenieros y especialistas está listo para asesorarte.
          </motion.p>
        </div>
      </header>

      {/* 2. SECCIÓN PRINCIPAL: INFO + FORMULARIO */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            
            {/* Columna Izquierda: Información */}
            <motion.div 
              className="info-column"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Información de Contacto</h2>
              <p className="intro-text">Estamos a tu disposición para consultas técnicas, visitas a obra o cotizaciones corporativas.</p>

              <div className="info-items">
                <div className="info-item">
                  <div className="icon-box"><FaMapMarkerAlt /></div>
                  <div>
                    <h3>Oficina Central</h3>
                    <p>Florencia de Mora, Trujillo - Perú</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="icon-box"><FaPhoneAlt /></div>
                  <div>
                    <h3>Teléfono Directo</h3>
                    <p>+51 924 353 323 <br /> +51 926 882 343</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="icon-box"><FaEnvelope /></div>
                  <div>
                    <h3>Correo Corporativo</h3>
                    <p>nunjajulio@gmail.com <br /> proyectos@serviciosmoroni.com</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="icon-box"><FaClock /></div>
                  <div>
                    <h3>Horario de Atención</h3>
                    <p>Lunes a Viernes: 8:00 AM - 6:00 PM <br /> Sábados: 8:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Columna Derecha: Formulario */}
            <motion.div 
              className="form-column"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="contact-form-card">
                <h2>Envíanos un mensaje</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Nombre o Empresa</label>
                    <input type="text" name="nombre" placeholder="Ej. Constructora ABC SAC" required onChange={handleChange} />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Correo Electrónico</label>
                      <input type="email" name="email" placeholder="correo@empresa.com" required onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label>Teléfono / Celular</label>
                      <input type="tel" name="telefono" placeholder="+51924353323" onChange={handleChange} />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Servicio de Interés</label>
                    <select name="servicio" required onChange={handleChange}>
                      <option value="">Selecciona un servicio...</option>
                      <option value="drywall">Construcción y Drywall</option>
                      <option value="estructuras">Estructuras Metálicas</option>
                      <option value="mantenimiento">Mantenimiento General</option>
                      <option value="seguridad">Seguridad Aeronáutica</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Detalles del Proyecto</label>
                    <textarea name="mensaje" rows="4" placeholder="Cuéntanos brevemente sobre los requerimientos de tu obra..." onChange={handleChange}></textarea>
                  </div>

                  <button type="submit" className="btn-submit-form">
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
