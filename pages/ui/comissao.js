import React, { useState } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { palestrantes_2024 } from "../../data/palestrantes";

export default function Comissao() {
  const [openBox, setOpenBox] = useState(null);

  const handleOpenBox = (index) => {
    setOpenBox(openBox === index ? null : index);
  };

  return (
    <section className="section-container" id="palestrantes">
      <div className="container">
      <h2 className="pb-4">COMISSÃO ORGANIZADORA</h2>
        <div className="grid-container">
          {palestrantes_2024.map((palestrante, index) => (
            <div
              key={index}
              className={`speaker-card ${openBox === index ? "open" : ""}`}
              onClick={() => handleOpenBox(index)}
            >
              {/* Imagem do palestrante */}
              <img
                src={palestrante.profile}
                alt={palestrante.fullName}
                className="speaker-image"
              />

              {/* Nome e título no perfil (visível quando fechado) */}
              <div className={`speaker-info ${openBox === index ? "hidden" : ""}`}>
                <div>
                  <p className="speaker-name">{palestrante.fullName}</p>
                  <p className="speaker-position">{palestrante.position}</p>
                  <div className=" justify-content-center">
                  <span className="speaker-tag">{palestrante.tag}</span>
                  </div>
                </div>
              </div>

              {/* Descrição do palestrante */}
              <div className={`expanded-content ${openBox === index ? "show" : ""}`}>
                
                <div>
                  <p className="speaker-name">{palestrante.fullName}</p>
                  <p className="speaker-position">{palestrante.position}</p>
                </div>
                <p className="speaker-description">{palestrante.description}</p>
                <div className="social-icons">
                  {palestrante.instagram && (
                    <a href={palestrante.instagram} target="_blank" rel="noopener noreferrer">
                      <FaInstagram />
                    </a>
                  )}
                  {palestrante.linkedin && (
                    <a href={palestrante.linkedin} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
