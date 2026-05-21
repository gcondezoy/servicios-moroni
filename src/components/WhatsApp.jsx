import { FaWhatsapp } from 'react-icons/fa';
import './WhatsApp.scss';

const WhatsApp = () => {
  return (
    <a 
      href="https://wa.me/51924353323" // Aquí luego cambias el número
      className="whatsapp-float"
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsApp;
