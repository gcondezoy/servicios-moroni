import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Sube suavemente al inicio cada vez que cambia la ruta
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Usamos 'instant' para que no se vea el barrido al cambiar de página
    });
  }, [pathname]);

  return null; // Este componente no renderiza nada visual
};

export default ScrollToTop;