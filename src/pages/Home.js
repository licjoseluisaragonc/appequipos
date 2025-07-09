import React, { useEffect }  from 'react';
import { useLocation } from 'react-router-dom';

import '../styles/Home.css';

import Customer from '../components/Customer';
import Servicios from '../components/Servicios'

const Home = () => {
  const location = useLocation()

   useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        // Usa setTimeout para dar tiempo al renderizado si es necesario
        // A veces el contenido no está 100% renderizado cuando el useEffect se ejecuta
        setTimeout(() => {
          elem.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Pequeño retraso de 100ms
      }
    } else {
      // Opcional: Si no hay hash, desplázate al principio de la página
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div>
      {/* Sección de Inicio */}
      <section className="section-inicio homepage">
        <div className="overlay">
          <div className="hero-card hero">
            <h1>Bienvenido a Proveedora de equipos</h1>
            <p>Soluciones integrales en equipos de escaneo e imagen con distribución a nivel nacional.</p>
            <button className="cta-button">Contáctenos</button>
          </div>
        </div>
      </section>

      {/* Sección Quiénes Somos */}
      <section id='quienes-somos' className="section-quienes-somos">
        <div className="features">
          <h2>¿Quiénes Somos?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Misión</h3>
              <p>Brindar servicios de suministros en hardware de alta gama y especializado, rapidez y compromiso con nuestros clientes.</p>
            </div>
            <div className="feature-card">
              <h3>Visión</h3>
              <p>Ser la empresa líder en suministro de tecnología en el país, destacando por nuestra eficiencia y confiabilidad.</p>
            </div>
            <div className="feature-card">
              <h3>Valores</h3>
              <p>Compromiso, puntualidad, seguridad y pasión por el servicio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Nuestros Servicios */}
      <section id='nuestros-servicios' className="section-nuestros-servicios">
        <div className="features">
          <h2>Nuestros Servicios</h2>
          <div className="catalogo-grid">
            <section className='framecatalogo'>
              <Servicios />
            </section>
          </div>          
        </div>
      </section>

      {/* Nuestros clientes */}
      {/* Carrusel de Clientes */}
      <section id="nuestros-clientes" className="customer-frame">
        <Customer />
      </section>
    </div>
  );
};

export default Home;
