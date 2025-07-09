import React, { useState } from 'react';
import '../styles/Contacto.css';

const Contacto = () => {
  const [formulario, setFormulario] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica
    if (!formulario.nombre || !formulario.correo || !formulario.mensaje) {
      alert('Todos los campos son obligatorios.');
      return;
    }

    console.log('Formulario enviado:', formulario);
    setEnviado(true);
    // Aquí podrías llamar a una API o servicio de email
  };

  return (
    <div className="contacto-container">
      <h2>Contacto</h2>
      {enviado ? (
        <p className="mensaje-enviado">¡Gracias por contactarnos! Te responderemos pronto.</p>
      ) : (
        <form className="formulario-contacto" onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              name="nombre"
              value={formulario.nombre}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Correo electrónico:
            <input
              type="email"
              name="correo"
              value={formulario.correo}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Mensaje:
            <textarea
              name="mensaje"
              rows="5"
              value={formulario.mensaje}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit">Enviar mensaje</button>
        </form>
      )}
    </div>
  );
};

export default Contacto;
