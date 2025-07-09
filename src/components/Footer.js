import React from 'react';
import '../styles/Footer.css';
import WhatsAppLink from '../components/WhatsAppLink'

const Footer = () => {
  return (
    <footer className="footer">
      <p>Contacto: contacto@ejemplo.com</p>
      <div className="shortcuts">
        <a href="#contacto">Política de privacidad</a> | 
        <a href="#contacto">Términos y condiciones</a>
      </div>
      <WhatsAppLink/>
    </footer>
  );
};

export default Footer;
