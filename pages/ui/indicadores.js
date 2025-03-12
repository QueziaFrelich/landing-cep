// ui/Indicadores.js
import React from 'react';
import Image from 'next/image';
import { FaChevronRight } from "react-icons/fa";

import BgIndicadores from '../../public/images/bg-indicadores.svg';

export default function Indicadores() {
  return (
    <section className='indicadores'>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h2>INDICADORES</h2>
              <p>
              O Índice de Progresso Social (IPS) Brasil, elaborado a partir da metodologia desenvolvida pela Social Progress Imperative, 
              surge como resposta à crescente necessidade de mensurar o progresso social de forma abrangente e comparável e se configura 
              como uma ferramenta de gestão territorial complexa, embasada em dados públicos e orientada para a avaliação do bem-estar social da população.
              </p>
              <p>
              A relevância do IPS transcende as fronteiras nacionais, sendo utilizado por organismos internacionais como a ONU, Banco Mundial, Banco Interamericano de Desenvolvimento (BID) e Organização para a Cooperação e Desenvolvimento Econômico (OCDE).
              A partir de uma escala única, o IPS Brasil analisa a capacidade de cada município em suprir as necessidades da população e se fundamenta em 53 indicadores secundários, derivados de fontes públicas e selecionados por sua capacidade de refletir, exclusivamente, resultados sociais e ambientais, em detrimento de meros investimentos.
              </p>
              <button>Confira os indicadores do seu município <FaChevronRight /></button>
            </div>
            <div className="col-md-4 align-self-start p-5">
              <Image src={BgIndicadores} alt="background" className="img-fluid" />
            </div>

          </div>
        </div>
      </section>
  );
}