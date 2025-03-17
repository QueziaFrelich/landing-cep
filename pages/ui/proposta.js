// ui/Proposta.js
import React from 'react';
import Image from 'next/image';
import { FaChevronRight } from "react-icons/fa";
import Propsta from '../../public/images/bg-proposta.png';

export default function Proposta() {
  return (
    <section className="proposta">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h2>PROPOSTAS</h2>
              <p>
              O 15º CEP é uma oportunidade estratégica para profissionais da área tecnológica contribuírem para o desenvolvimento do Brasil. A estrutura do evento será projetada para evidenciar a eficácia das propostas, promover a interlocução entre os participantes e o alinhamento entre as soluções propostas com as necessidades sociais e econômicas do país, de forma prática e inovadora.
              As propostas deverão contemplar soluções para problemas pré-definidos, explorar problemas reais e que possam melhorar a qualidade de vida da população, conforme o IPS Brasil.
              </p>
              <p>
                <span>I. Impacto Social:</span>O potencial da solução para melhorar a qualidade de vida da população;
                <br /><span>II. Viabilidade Técnica:</span>Avaliação da capacidade de implementação da solução com os recursos disponíveis;
                <br /><span>III. Sustentabilidade:</span>Foco em soluções que promovam a sustentabilidade ambiental e econômica;
                <br /><span>IV. Alinhamento com o IPS:</span> Propostas devem estar alinhadas com as dimensões e componentes do Índice de Progresso Social (IPS), em especial aqueles em que a graduação seja baixa, contribuindo assim para sua melhoria;
               
              </p>
              <p>
              Você pode enviar a sua própria proposta e curtir, comentar e sugerir modificações nas propostas já cadastradas pelos demais participantes              
              </p>
              <a href="http://propostas.crea-sc.org.br/" target="_blank" rel="noopener noreferrer">
              <button>Acesse aqui a Plataforma Digital das Propostas <FaChevronRight /></button>
              </a>
              
            </div>
            <div className="col-md-5 align-self-start p-5">
              <Image src={Propsta} alt="background" className="img-fluid" />
            </div>

          </div>
        </div>
      </section>

  );
}
