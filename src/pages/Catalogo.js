import React from 'react';
import Slider from 'react-slick';
import '../styles/Catalogo.css';

// Imágenes locales
import equipo1 from '../resources/fotosequipos/camaradigital/42mp/42mp.png';
import equipo2 from '../resources/fotosequipos/camaradigital/72mp/72mp.png';
import equipo3 from '../resources/fotosequipos/camarastermograficas/fluketi20/Fluke - Ti20.png';
import equipo4 from '../resources/fotosequipos/camarastermograficas/htimodelo175/HTI-Modelo-175.png';
import equipo5 from '../resources/fotosequipos/eddycurrent/bloquedecalibracion/Bloque de calibracion.png';

const productos = [
  {
    id: 1,
    nombre: 'Sensor Ultrasónico',
    descripcion: 'Detecta distancias con precisión mediante ultrasonido.',
    imagen: './resources/Captura de pantalla 2025-07-05 204603.png'
  },
  {
    id: 2,
    nombre: 'Sensor de Corriente',
    descripcion: 'Ideal para medir el flujo de corriente en circuitos.',
    imagen: './resources/Captura de pantalla 2025-07-05 204630.png'
  },
  {
    id: 3,
    nombre: 'Detector de Movimiento',
    descripcion: 'Reacciona al movimiento en un área definida.',
    imagen: './resources/Captura de pantalla 2025-07-05 204615.png'
  }
  // Puedes agregar más productos...
];

const articulos = [
  {
    img: equipo1,
    alt: 'Cámara digital 42mp',
    descripcion: 'La Cámara Digital de 42 megapíxeles redefine la fotografía con un nivel de detalle y nitidez que la coloca por encima del estándar para cámaras compactas...',
  },
  {
    img: equipo2,
    alt: 'Cámara digital 72mp',
    descripcion: 'La Cámara Digital de 72 megapíxeles está diseñada para quienes buscan una calidad de imagen extrema...',
  },
  {
    img: equipo3,
    alt: 'Cámara termográfica Fluke Ti20',
    descripcion: 'La cámara termográfica Fluke Ti20 ofrece imágenes térmicas precisas y claras, ideal para mantenimiento industrial...',
  },
  {
    img: equipo4,
    alt: 'HTI Modelo 175',
    descripcion: 'El modelo HTI-175 combina funcionalidad y precisión térmica para inspecciones rápidas y efectivas en campo...',
  },
  {
    img: equipo5,
    alt: 'Bloque de calibración Eddy Current',
    descripcion: 'El bloque de calibración para ensayos por corrientes Eddy asegura mediciones precisas en pruebas no destructivas...',
  }
];

const Catalogo = () => {
  const imagenes = [equipo1, equipo2, equipo3,equipo4,equipo5];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="catalogo-container">
      <h2>Catálogo de Productos premium</h2>
      <div className="catalogo-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <img src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <button>Ver más</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogo;
