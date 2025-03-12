import React, { useState } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { conteudos } from "../../data/cidades";

export default function Programacao() {
  // Definir o estado de selectedOption
  const [selectedOption, setSelectedOptionState] = useState(
    Object.keys(conteudos)[0] || null // Pega o primeiro item ou null se estiver vazio
  );
  
  // Função para selecionar a cidade
  const handleSelectOption = (cidade) => {
    setSelectedOptionState(cidade); // Atualiza o estado com a cidade selecionada
  };
  

  return (
    <section className="mapa">
      <div className="container mt-4 p-5">
        <h2>PROGRAMAÇÃO</h2>
        <div className="mt-3 rounded bg-transparemt">
          {selectedOption && conteudos[selectedOption] ? (
            conteudos[selectedOption]
          ) : (
            <p>Selecione uma inspetoria para ver a programação.</p>
          )}
        </div>
      </div>
    </section>
  );
}
