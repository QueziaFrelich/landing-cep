// ui/Indicadores.js
import React from 'react';
import Image from 'next/image';
import BgIndicadores from '../../public/images/bg-indicadores.svg';

export default function Indicadores() {
  return (
    <section>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h2>INDICADORES</h2>
              <p>
                Para calcular o IPS Brasil 2024, foi utilizado um total de 53 indicadores.
                Todos esses indicadores são provenientes de fontes oficiais e de institutos
                de pesquisa, tais como o Ministério da Saúde, Ministério da Cidadania,
                Sistema Nacional de formações sobre o Saneamento (SNIS), Instituto Nacional
                de Estudos e pesquisas Educacionais Anísio Teixeira (Inep), Instituto
                Nacional de Pesquisas Espaciais (Inpe), Conselho Nacional de Justiça (CNJ),
                Instituto Brasileiro de Geografia e Estatística (IBGE), Mapbiomas, Anatel,
                CadÚnico, entre outras. A escolha dos indicadores segue um formato rigoroso,
                que busca atender os princípios do IPS e as perguntas norteadoras dos componentes.
              </p>
            </div>
            <div className="col-md-4 align-self-start p-5">
              <Image src={BgIndicadores} alt="background" className="img-fluid" />
            </div>

          </div>
        </div>
      </section>

  );
}
