import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../styles/WhatsappLink.css';

const WhatsappLink = () => {
  const numero = '5215512345678'; // Clave de país + número
  const url = `https://wa.me/${numero}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <FaWhatsapp size={32} style={{ marginRight: '8px' }} />
      Escríbenos por WhatsApp
    </a>
  );
};

export default WhatsappLink;
