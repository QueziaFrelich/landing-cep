// ui/tema.js
import React from 'react';

export default function Tema() {
  return (
    <section className="tema">
        <div className="container p-5">
          <div className="row pt-5">
            <div className="col-12 col-md-6">
              <h2>O TEMA</h2>
              <h5 className="pt-4">
                Engenharia, Agronomia e<br /> Geociências na construção de
              </h5>
              <p className="titulo">cidades <br /> inteligentes</p>
            </div>
            <div className="col-12 col-md-6">
              <p>
                Em um mundo cada vez mais urbanizado, o conceito de “<span>cidade inteligente</span>” surge como resposta aos desafios urbanos,
                promovendo o bem-estar e a gestão eficiente de recursos por meio da tecnologia e sustentabilidade. No Brasil, essas
                cidades se destacam pelo desenvolvimento urbano sustentável, governança colaborativa e uso responsável de tecnologias
                para reduzir desigualdades, melhorar a qualidade de vida e aumentar a resiliência.
              </p>
              <p>
                As cidades inteligentes não são mais uma visão futurista, mas um presente em construção. Nesse contexto, a Engenharia,
                a Agronomia e as Geociências desempenham um papel fundamental, <span>oferecendo soluções inovadoras e moldando um futuro
                  urbano mais humano, eficiente e sustentável.</span>
              </p>
            </div>
          </div>

          <div className="row pt-4">
            <h5>OS EIXOS TEMÁTICOS</h5>
            <div className="d-flex bd-highlight flex-wrap">
              <div className={`p-2 m-1 flex-fill bd-highlight d-flex justify-content-center card`}>
                <h2>Acessibilidade e Mobilidade Urbana</h2>
              </div>
              <div className={`p-2 m-1 flex-fill bd-highlight d-flex justify-content-center card`}>
                <h2>Saneamento Básico</h2>
                <p>Tratamento e distribuição de água, coleta e tratamento de esgoto, drenagem urbana e gestão de resíduos sólidos.</p>
              </div>
              <div className={`p-2 m-1 flex-fill bd-highlight d-flex justify-content-center card`}>
                <h2>Engenharia Pública</h2>
                <p>Reurbs, Moradia, Tecnologia Social.</p>
              </div>
              <div className={`p-3 m-1 flex-fill bd-highlight d-flex justify-content-center card`}>
                <h2>Qualidade Ambiental</h2>
                <p>Áreas Verdes Urbanas, Emissões de CO₂ por Habitante, Focos de Calor, Índice de Vulnerabilidade Climática dos Municípios, Supressão da Vegetação Primária e Secundária.</p>
              </div>
              <div className={`p-2 m-1 flex-fill bd-highlight d-flex justify-content-center card`}>
                <h2>Desenvolvimento Sustentável Energético Para os Municípios</h2>
                <p>Energia acessível e limpa.</p>
              </div>
              <div className={`p-2 m-1 flex-fill bd-highlight d-flex justify-content-center card`}>
                <h2>Inovação e Desburocratização do Sistema Confea/Crea</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

  );
}
