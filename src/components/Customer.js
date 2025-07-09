import React, { useEffect, useState, useRef } from "react";
import "../styles/Customer.css"; 

const Customer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="customer-section" ref={sectionRef}>
      <div className="customer-title">
        <h2 className="title-line1">Nuestros</h2>
        <h2 className="title-line2">Clientes</h2>
      </div>
      <div className={`carousel-container ${isVisible ? "flip-in" : ""}`}>
        <div className={`carousel-track ${isVisible ? "scroll-animation" : ""}`}>
          {/* Puedes poner aquí tus <a><img /></a> repetidos, como antes */}
          {[...Array(2)].map((_, i) =>
            [
              "https://res.cloudinary.com/dcsglrdgm/image/upload/v1741667075/01-MEDIIMAGEN-min_oenytz_pwa2dp.png",
              "https://res.cloudinary.com/dcsglrdgm/image/upload/v1741667103/02-JATSUMI-min_y0qf1h_spwzhk.png",
              "https://res.cloudinary.com/dcsglrdgm/image/upload/v1741667143/03-santofa-min_yof9pd_oskyxt.png",
              "https://res.cloudinary.com/dcsglrdgm/image/upload/v1741667179/04-OPTIDENT-min_sy4jqd_dbgeus.png",
              "https://res.cloudinary.com/dcsglrdgm/image/upload/v1741667208/05-servomotion-min_jrdbum_cmqgxq.png",
              "https://res.cloudinary.com/dcsglrdgm/image/upload/v1741667241/06-frankolmotors-min_fgpkpf_w8bxf6.png",
              "https://res.cloudinary.com/dcsglrdgm/image/upload/v1741667282/07-IDENTIGRAF-min_dblach_ptjvaf.png",
              "https://res.cloudinary.com/dcsglrdgm/image/upload/v1741667315/08-VERSUGAS-min_lclzkh_llxh9d.png",
              "https://res.cloudinary.com/dcsglrdgm/image/upload/v1741667345/09-aqm-min_oggx8u_ii53by.png",
              "https://res.cloudinary.com/dcsglrdgm/image/upload/v1741667377/11-CIRCUITS_yw7ev7_vgs6ec.png",
              "https://res.cloudinary.com/dcsglrdgm/image/upload/v1741667416/10-huaquian-min_fmrqby_egdzqz.png",
            ].map((src, index) => (
              <a
                href="#!"
                key={`${i}-${index}`}
                className="carousel-item"
              >
                <img src={src} alt={`cliente-${index}`} />
              </a>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Customer;
