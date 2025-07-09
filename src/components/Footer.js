import React from 'react';
import '../styles/Footer.css';
import WhatsAppLink from '../components/WhatsAppLink'

const Footer = () => {
  return (
    <footer className="footer">
      <p>Contacto: contacto@ejemplo.com</p>
      <div className="shortcuts">
        <a href="#">Política de privacidad</a> | 
        <a href="#">Términos y condiciones</a>
      </div>
      <WhatsAppLink/>
    </footer>
  );
};

export default Footer;
