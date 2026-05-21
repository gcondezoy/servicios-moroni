import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import './Portfolio.scss'; // Importación de tu archivo de estilos separado

const Portfolio = () => {
const [filter, setFilter] = useState('Todos');
const [selectedProject, setSelectedProject] = useState(null);
const [mediaIndex, setMediaIndex] = useState(0);

// Bloquea el scroll del fondo cuando el modal está abierto
useEffect(() => {
if (selectedProject) {
document.body.style.overflow = 'hidden';
} else {
document.body.style.overflow = 'unset';
}
return () => { document.body.style.overflow = 'unset'; };
}, [selectedProject]);

const categories = ['Todos', 'Drywall', 'Carpintería', 'Corporativo'];

// Base de datos enriquecida con múltiples medios (imágenes/videos)
const projects = [
{
id: 1,
title: 'Oficinas Tech Lima',
category: 'Drywall',
media: [
{ type: 'image', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80' },
{ type: 'image', url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80' }
],
longDesc: 'Implementación completa de oficinas corporativas utilizando el sistema constructivo Drywall. El proyecto incluyó el diseño de espacios abiertos, aislamiento termoacústico de alto rendimiento y acabados premium.',
specs: ['Área total intervenida: 450m²', 'Tiempo de ejecución: 45 días', 'Aislamiento acústico en salas (45dB)']
},
{
id: 2,
title: 'Mobiliario Retail',
category: 'Carpintería',
media: [
{ type: 'image', url: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80' },
{ type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
{ type: 'image', url: 'https://images.unsplash.com/photo-1449247613801-ab06418e2861?auto=format&fit=crop&w=1200&q=80' }
],
longDesc: 'Diseño, fabricación e instalación de mobiliario comercial a medida para tienda boutique. Se combinaron maderas nobles con detalles en metal y vidrio.',
specs: ['Madera de roble macizo y MDF enchapado', 'Acabado en poliuretano mate', 'Iluminación LED cálida integrada']
},
{
id: 3,
title: 'Ampliación Planta',
category: 'Drywall',
media: [
{ type: 'image', url: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=1200&q=80' }
],
longDesc: 'Construcción de nuevos módulos administrativos y zonas de descanso dentro de una planta industrial operativa.',
specs: ['Uso de placas RF y RH', 'Estructura metálica pesada', 'Alturas superiores a 4 metros']
},
{
id: 4,
title: 'Mantenimiento Sede Sur',
category: 'Corporativo',
media: [
{ type: 'image', url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80' },
{ type: 'image', url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80' }
],
longDesc: 'Servicio integral de mantenimiento preventivo y correctivo para instalaciones corporativas. Incluyó pintura general y ajuste de tabiquería.',
specs: ['Mantenimiento de 1200m²', 'Reparación de 45 estaciones de trabajo', 'Pintura epóxica en zonas de alto tránsito']
},
{
id: 5,
title: 'Puertas Acústicas',
category: 'Carpintería',
media: [
{ type: 'image', url: 'https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?auto=format&fit=crop&w=1200&q=80' }
],
longDesc: 'Fabricación e instalación de puertas acústicas especializadas para estudios de grabación y salas de directorio. Garantizan privacidad total.',
specs: ['Núcleo multicapa de alta densidad', 'Burletes perimetrales automotrices', 'Aislamiento certificado de hasta 50dB']
},
{
id: 6,
title: 'Tabiquería Clínica',
category: 'Drywall',
media: [
{ type: 'image', url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80' },
{ type: 'image', url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80' }
],
longDesc: 'División de espacios para consultorios médicos cumpliendo con las estrictas normativas del sector salud (MINSA).',
specs: ['Placas con tratamiento antibacteriano', 'Refuerzos para equipos de rayos X', 'Cumplimiento de norma técnica hospitalaria']
}
];

const filteredProjects = filter === 'Todos'
? projects
: projects.filter(p => p.category === filter);

// Lógica del Slider
const nextMedia = (e) => {
e.stopPropagation();
if (selectedProject) {
setMediaIndex((prev) => (prev === selectedProject.media.length - 1 ? 0 : prev + 1));
}
};

const prevMedia = (e) => {
e.stopPropagation();
if (selectedProject) {
setMediaIndex((prev) => (prev === 0 ? selectedProject.media.length - 1 : prev - 1));
}
};

const openProject = (project) => {
setSelectedProject(project);
setMediaIndex(0); // Reinicia el slider a la primera imagen
};

return (
