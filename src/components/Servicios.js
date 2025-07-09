import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiCamera2Fill } from "react-icons/ri";
import { GiDeskLamp } from "react-icons/gi";
import { GiLaptop } from "react-icons/gi";
import { WiThermometer } from "react-icons/wi";

import '../styles/Servicios.css';

const services = [
  {
    title: "Cámaras fotográficas",
    description: "Amplio catálogo de equipos fotográficos",
    image:
      "../resources/fotosequipos/camaradigital/42mp/42mp.png",
    logo: <RiCamera2Fill className="react-icons" />, 
  },
  {
    title: "Lamparas led",
    description: "Todas las lamparas led de mano que necesites están aquí",
    image:
      "../resources/fotosequipos/Lampara/4-Led/4- led.png",
    logo: <GiDeskLamp className="react-icons" />,
  },
  {
    title: "Laptop´s",
    description: "Todas las laptop de alta gama están aquí",
    image:
      "../resources/fotosequipos/Laptops/Dell -Inspiron 15/Dell -Inspiron 15.jpg",
    logo: <GiLaptop className="react-icons" />,
  },
  {
    title: "Equipos de metrología",
    description: "Tenemos un aplio catálogo en equipos de metrología ",
    image:
      "../resources/fotosequipos/Metrologia/Bridge Cam/Bridge cam.png",
    logo: <GiLaptop className="react-icons" />,
  },
  {
    title: "Equipos pirómetros",
    description: "Equipos especiales para detección de fuego",
    image: "../resources/fotosequipos/pirómetro/pirómetro/pirómetro.png",
    logo: <WiThermometer className="react-icons" />,
  }
];

// Variantes de animación para cada servicio
const serviceVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

const Servicios = () => {
  const [serviceActive, setServiceActive] = useState({
    service0: true,
    service1: false,
    service2: false,
    service3: false,
    service4: false,
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const elementRefs = {
    div1: useRef(null),
    div2: useRef(null),
    div3: useRef(null),
    div4: useRef(null),
    div5: useRef(null),
  };

  // Efecto para hacer scroll cuando se activa un servicio
  useEffect(() => {
    const activeArticleIndex = Object.keys(serviceActive).find(
      (key) => serviceActive[key]
    );
    if (activeArticleIndex) {
      // El slice(-1) en el nombre de la ref está mal, debería ser slice(-1) en el `activeArticleIndex`
      // para obtener el número, y luego mapearlo a `div1`, `div2`, etc.
      const indexNum = parseInt(activeArticleIndex.slice(-1));
      const refKey = `div${indexNum + 1}`; // Ajustamos para que div0 sea div1, etc.
      const ref = elementRefs[refKey];
      if (ref && ref.current) {
        setTimeout(() => {
          ref.current.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }, 300);
      }
    }
  }, [elementRefs, serviceActive]);


  const handleScroll = (id) => {
    // La lógica de scroll está en el useEffect, esta función solo actualiza el estado.
    setServiceActive((prev) => ({
      ...Object.keys(prev).reduce((acc, key) => {
        acc[key] = key === id;
        return acc;
      }, {}),
    }));
  };

  return (
    <section className="services-section">
      {/* Sección de escritorio */}
      <div className="services-sidebar-container">
        <div className="services-sidebar-title-wrapper">
          <h2 className="services-sidebar-title-h2-primary">
            Venta
          </h2>
          <h2 className="services-sidebar-title-h2-secondary">
            Renta
          </h2>
        </div>
        <div className="services-menu-items-wrapper">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`service-menu-item ${serviceActive[`service${index}`] ? 'active' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onClick={() => {
                const newState = {};
                services.forEach((_, i) => {
                  newState[`service${i}`] = i === index;
                });
                setServiceActive(newState);
              }}
            >
              <div className="service-menu-item-logo-wrapper">{service.logo}</div>
              <div className="service-menu-item-title-wrapper">
                <h2>{service.title}</h2>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="service-detail-container">
        <AnimatePresence mode="wait">
          {serviceActive.service0 && (
            <motion.div
              key={0}
              className="service-detail-panel"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={serviceVariants}
              transition={{ duration: 0.5 }}
            >
              <div className="service-detail-image-wrapper">
                <img
                  className="service-detail-image"
                  src={services[0].image}
                  alt=""
                />
              </div>
              <div className="service-detail-text-content">
                <h2 className="green-text">
                  ¿Necesitas equipo en renta?
                </h2>
                <p>
                  Ofrecemos fletes marítimos para todo tipo de carga,
                  incluyendo:
                </p>
                <ul>
                  <li>
                    <span className="bullet-point">◦</span> Carga LCL
                    (Consolidada)
                  </li>
                  <li>
                    <span className="bullet-point">◦</span> Carga FCL
                    (Full Contenedores)
                  </li>
                  <li>
                    <span className="bullet-point">◦</span> Carga
                    REEFER
                  </li>
                  <li>
                    <span className="bullet-point">◦</span> Carga
                    Peligrosa - IMO
                  </li>
                </ul>
                <p>
                  Contamos con una amplia experiencia en el transporte marítimo
                  y podemos ofrecerte un servicio personalizado y de alta
                  calidad.
                </p>
              </div>
            </motion.div>
          )}
          {serviceActive.service1 && (
            <motion.div
              key={1}
              className="service-detail-panel"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={serviceVariants}
              transition={{ duration: 0.5 }}
            >
              <div className="service-detail-image-wrapper">
                <img
                  className="service-detail-image"
                  src={services[1].image}
                  alt=""
                />
              </div>
              <div className="service-detail-text-content">
                <h2 className="blue-text">
                  ¿Requieres de equipos de iluminación?
                </h2>
                <p>
                  Contamos con equipos led de alta gama
                </p>
              </div>
            </motion.div>
          )}
          {serviceActive.service2 && (
            <motion.div
              key={2}
              className="service-detail-panel"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={serviceVariants}
              transition={{ duration: 0.5 }}
            >
              <div className="service-detail-image-wrapper">
                <img
                  className="service-detail-image"
                  src={services[2].image}
                  alt=""
                />
              </div>
              <div className="service-detail-text-content">
                <h2 className="green-text">
                  ¿Requieres de equipo de computo en renta o venta?
                </h2>
                <p>
                  Tenemos equipos de la mejor capacidad
                </p>
                <ul>
                  <li>
                    <span className="bullet-point">◦</span> Laptops (1x20st, 1x40HQ).
                  </li>
                  <li>
                    <span className="bullet-point">◦</span> De escritorio
                  </li>
                  <li>
                    <span className="bullet-point">◦</span> Mini
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
          {serviceActive.service3 && (
            <motion.div
              key={3}
              className="service-detail-panel"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={serviceVariants}
              transition={{ duration: 0.5 }}
            >
              <div className="service-detail-image-wrapper">
                <img
                  className="service-detail-image"
                  src={services[3].image}
                  alt=""
                />
              </div>
              <div className="service-detail-text-content">
                <h2 className="blue-text">
                  ¿Requieres de equipos de metrología?
                </h2>
                <p className="my-5 mx-2">
                  Tenemos equipos actuales y sofisticados
                </p>

                <p className="mx-2">
                  Consulta con nosotros para verificar las capacidades y requerimientos
                </p>
              </div>
            </motion.div>
          )}
          {serviceActive.service4 && (
            <motion.div
              key={4}
              className="service-detail-panel"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={serviceVariants}
              transition={{ duration: 0.5 }}
            >
              <div className="service-detail-image-wrapper">
                <img
                  className="service-detail-image"
                  src={services[4].image}
                  alt=""
                />
              </div>
              <div className="service-detail-text-content">
                <h2 className="green-text tracking-wider">
                  Equipos pirómetros
                </h2>
                <p>
                  Contamos con equipos de medición de alta gama y posición
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="service-dots-navigation">
          {services.map((_, index) => (
            <div
              key={index}
              className={`service-dot ${serviceActive[`service${index}`] ? 'active' : ''}`}
              onClick={() => {
                const newState = {};
                services.forEach((__, i) => {
                  newState[`service${i}`] = i === index;
                });
                setServiceActive(newState);
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Sección móvil */}
      <div
        className={`services-mobile-container ${
          !serviceActive.service0 &&
          !serviceActive.service1 &&
          !serviceActive.service2 &&
          !serviceActive.service3 &&
          !serviceActive.service4
            ? "collapsed"
            : "expanded"
        }`}
      >
        <div className="services-mobile-title-wrapper">
          <h2 className="services-mobile-title-h2-primary">
            Nuestros
          </h2>
          <h2 className="services-mobile-title-h2-secondary">
            Servicios 
          </h2>
        </div>
        <div className="services-mobile-menu-items-wrapper">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => {
                const newState = {};
                services.forEach((_, i) => {
                  newState[`service${i}`] = i === index ? !serviceActive[`service${index}`] : false;
                });
                setServiceActive(newState);
                // Llama a handleScroll solo si se va a activar
                if (!serviceActive[`service${index}`]) {
                    handleScroll(`service${index}`);
                }
              }}
              className="service-mobile-menu-button"
            >
              <motion.div
                className={`service-mobile-menu-item ${serviceActive[`service${index}`] ? 'active' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="w-[10%] ">{service.logo}</div>
                <div className="w-[90%] flex justify-center content-center">
                  <h2>{service.title}</h2>
                </div>
              </motion.div>
            </button>
          ))}

          {/* Renderizado condicional de los detalles en móvil */}
          <AnimatePresence mode="wait">
            {serviceActive.service0 && (
              <motion.div
                key={0}
                className="service-mobile-detail-panel"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={serviceVariants}
                transition={{ duration: 0.5 }}
                ref={elementRefs.div1}
              >
                <div className="service-mobile-detail-image-wrapper">
                  <img
                    className="service-mobile-detail-image"
                    src={services[0].image}
                    alt=""
                  />
                </div>
                <div className="service-mobile-detail-text-content">
                  <h2 className="green-text">
                    ¿Necesitas equipo en renta?
                  </h2>
                  <p>
                    Venta de equipo
                  </p>
                  <ul>
                    <li>
                      <span className="bullet-point">◦</span> Carga
                      LCL (Consolidada)
                    </li>
                    <li>
                      <span className="bullet-point">◦</span> Carga
                      FCL (Full Contenedores)
                    </li>
                    <li>
                      <span className="bullet-point">◦</span> Carga
                      REEFER
                    </li>
                    <li>
                      <span className="bullet-point">◦</span> Carga
                      Peligrosa - IMO
                    </li>
                  </ul>
                  <p>
                    Contamos con una amplia experiencia en el transporte
                    marítimo y podemos ofrecerte un servicio personalizado y de
                    alta calidad.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence mode="wait">
            {serviceActive.service1 && (
              <motion.div
                key={1}
                className="service-mobile-detail-panel"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={serviceVariants}
                transition={{ duration: 0.5 }}
                ref={elementRefs.div2}
              >
                <div className="service-mobile-detail-image-wrapper">
                  <img
                    className="service-mobile-detail-image"
                    src={services[1].image}
                    alt=""
                  />
                </div>
                <div className="service-mobile-detail-text-content">
                  <h2 className="blue-text">
                    ¿Necesitas enviar tu mercancía de forma rápida y económica?
                    La carga aérea consolidada es la mejor
                  </h2>
                  <p>
                    La carga aérea consolidada es la mejor opción para envíos
                    urgentes.
                  </p>

                  <h2 className="blue-text font-semibold">
                    ◦ Carga Aérea Consolidada
                  </h2>
                  <p className="ml-2">
                    Es una excelente alternativa para optimizar los costos en la
                    gestión logística.
                  </p>

                  <h2 className="blue-text font-semibold">
                    ◦ Carga Aérea Back to Back
                  </h2>
                  <p className="ml-2">
                    Garantizamos entregas rápidas y eficientes mediante vuelos
                    directos y conexiones, disponibles tanto diaria como
                    interdiariamente.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence mode="wait">
            {serviceActive.service2 && (
              <motion.div
                key={2}
                className="service-mobile-detail-panel"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={serviceVariants}
                transition={{ duration: 0.5 }}
                ref={elementRefs.div3}
              >
                <div className="service-mobile-detail-image-wrapper">
                  <img
                    className="service-mobile-detail-image"
                    src={services[2].image}
                    alt=""
                  />
                </div>
                <div className="service-mobile-detail-text-content">
                  <h2 className="green-text text-center">
                    ¿Tiene alguna necesidad de transporte de carga terrestre
                    nacional o internacional en este momento?
                  </h2>
                  <p>
                    Ofrecemos una amplia gama de servicios de transporte de
                    carga terrestre nacional e internacional, incluyendo:
                  </p>
                  <ul>
                    <li>
                      <span className="bullet-point">◦</span>{" "}
                      Transporte de contenedores (1x20st, 1x40HQ).
                    </li>
                    <li>
                      <span className="bullet-point">◦</span>{" "}
                      Transporte para cargas sueltas.
                    </li>
                    <li>
                      <span className="bullet-point">◦</span>{" "}
                      Transporte en camión furgón.
                    </li>
                    <li>
                      <span className="bullet-point">◦</span>{" "}
                      Transporte internacional a fronteras.
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence mode="wait">
            {serviceActive.service3 && (
              <motion.div
                key={3}
                className="service-mobile-detail-panel"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={serviceVariants}
                transition={{ duration: 0.5 }}
                ref={elementRefs.div4}
              >
                <div className="service-mobile-detail-image-wrapper">
                  <img
                    className="service-mobile-detail-image"
                    src={services[3].image}
                    alt=""
                  />
                </div>
                <div className="service-mobile-detail-text-content">
                  <h2 className="blue-text text-center">
                    ¿Está cansado de perder tiempo y dinero en los trámites
                    aduaneros?
                  </h2>
                  <p className="my-2 mx-2">
                    ¡Confíe para que su mercancía llegue a su destino de forma
                    rápida, segura y sin complicaciones!
                  </p>

                  <p className="mx-2">
                    El servicio de aduanas comprende desde la llegada de la
                    mercancía al Perú hasta la posterior entrega en sus
                    instalaciones.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence mode="wait">
            {serviceActive.service4 && (
              <motion.div
                key={4}
                className="service-mobile-detail-panel"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={serviceVariants}
                transition={{ duration: 0.5 }}
                ref={elementRefs.div5}
              >
                <div className="service-mobile-detail-image-wrapper">
                  <img
                    className="service-mobile-detail-image"
                    src={services[4].image}
                    alt=""
                  />
                </div>
                <div className="service-mobile-detail-text-content">
                  <h2 className="green-text tracking-wider">
                    Nuestra consultoría integral te ayuda a:
                  </h2>
                  <p>
                    Ofrecemos fletes marítimos para todo tipo de carga,
                    incluyendo:
                  </p>
                  <ul className="list-disc leading-5">
                    <li>
                      <span className="font-semibold">
                        Establecer márgenes de utilidad óptimos
                      </span>{" "}
                      que maximicen tus ganancias.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Determinar con precisión los costos de logística
                        integral,
                      </span>{" "}
                      incluyendo transporte, almacenamiento, inventario y
                      gestión de pedidos.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Establecer precios de productos competitivos
                      </span>{" "}
                      que se ajusten a las condiciones del mercado y te permitan
                      aumentar tus ventas.
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Servicios;