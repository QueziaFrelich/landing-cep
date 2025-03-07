// ui/Proposta.js
import React from 'react';
import Image from 'next/image';
import Propsta from '../../public/images/bg-proposta.png';

export default function Proposta() {
  return (
    <section className="proposta">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h2>PROPOSTAS</h2>
              <p>
                Todos os participantes têm direito a voz. Somente os delegados
                institucionais e estaduais têm direito a voto. As propostas devem
                contemplar, obrigatoriamente, os seguintes requisitos (Resolução
                1.013/2005, art. 17)
              </p>
              <p>
                <span>I.</span> situação existente;
                <br /><span>II.</span> proposição;
                <br /><span>III.</span> justificativa;
                <br /><span>IV.</span> fundamentação legal;
                <br /><span>V.</span> sugestão de mecanismos para implementação
              </p>
              <p>
                Além disso, as propostas deverão contemplar soluções para problemas
                pré-definidos, explorar problemas reais e que possam melhorar a qualidade
                de vida da população, conforme o IPS Brasil.
              </p>
            </div>
            <div className="col-md-5 align-self-start p-5">
              <Image src={Propsta} alt="background" className="img-fluid" />
            </div>

          </div>
        </div>
      </section>

  );
}
