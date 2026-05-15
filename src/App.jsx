import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsApp from './components/WhatsApp';
import ScrollToTop from './components/ScrollToTop'; // <-- 1. Lo importas
import Home from './pages/Home';
import Nosotros from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* <-- 2. Lo colocas aquí arriba */}
      <Navbar />
      <main style={{ minHeight: '80vh' }}> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/proyectos" element={<Portfolio />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>
      <WhatsApp />
      <Footer />
    </BrowserRouter>
  );
}

export default App;