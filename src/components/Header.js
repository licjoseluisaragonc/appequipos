import React, { useState, useRef, useEffect } from 'react';

import '../styles/Header.css';
import logo from '../resources/logogenerico.png';
import Breadcrumbs from '../components/Breadcrumbs'

const Header = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  // Detectar clics fuera del menú
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      <div>
        <img src={logo} alt="logo" className="App-logo" />
      </div>
      <div className='breadcrumbs-navigate menu-link'>
        <Breadcrumbs /> 
      </div>
      <nav className="mainmenu">
          <a href="/#quienes-somos" className="menu-link">¿Quiénes somos?</a>
          <a href="/#nuestros-servicios" className="menu-link">Nuestros servicios</a>          
          <a href="/catalogo" className="menu-link">Catalogo</a>
          <a href="/#nuestros-clientes" className="menu-link">Nuestros clientes</a>
          <a href="/contacto" className="menu-link">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;
