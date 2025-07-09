import React from 'react';
import '../styles/Catalogo.css';

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

const Catalogo = () => {
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
