// ui/Mapa.js
import React, { useState } from 'react';
import Image from 'next/image';
import { FiCalendar, FiMapPin, FaChevronRight } from 'react-icons/fi';
import ImgMapa from '../../public/images/mapa-0.svg';
import BotaoLocal from '../../public/images/botao-local.svg';
import { locais } from '../../data/locais'; // Importa os dados corretamente

export default function Mapa() {
  const [localSelecionado, setLocalSelecionado] = useState(locais[0]);

  return (
    <section className="mapa my-5 pt-1">
      <div className="container mt-5">
        <h2>ENCONTROS PREPARATÓRIOS</h2>
        <p>Clique nas regiões do estado para verificar os locais e links de inscrição dos Encontros Preparatórios do 15º CEP</p>
        <div className="row align-items-center">
          <div className="col-12 col-md-8 d-flex justify-content-center position-relative">
            <Image src={ImgMapa} alt="Mapa macro regiões" className="img-fluid" />
            {locais.map((local, index) => (
              <button
                key={index}
                className={`btn-mapa btn-mapa-${index + 1}`}
                onClick={() => setLocalSelecionado(local)}
              >              
              </button>
            ))}
          </div>

          {localSelecionado && (
            <div className="col-12 col-md-4">
              <h2>{localSelecionado.nome}</h2>
              <div className="d-flex align-items-center">
                <FiCalendar className="me-2 text-primary icon" size={20} />
                <p className="mb-0">{localSelecionado.data}</p>
              </div>
              <div className="d-flex align-items-center mt-2">
                <FiMapPin className="me-2 text-primary icon" size={20} />
                <p className="mb-0">{localSelecionado.endereco}</p>
              </div>

              {/* Renderiza o botão apenas se localSelecionado.inscricao existir e não estiver vazio */}
              {localSelecionado.inscricao && (
                <a href={localSelecionado.inscricao} target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary mt-3">Inscreva-se já</button>
                </a>
              )}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
