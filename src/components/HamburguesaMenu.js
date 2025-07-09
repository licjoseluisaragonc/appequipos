import React from 'react';
import '../styles/HamburguesaMenu.css';
import { Link } from 'react-router-dom';

const HamburgerMenu = () => {
  return (
    <nav className="menu">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/catalogo">Catálogo</Link></li>
        <li><Link to="/resenas">Reseñas</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default HamburgerMenu;
