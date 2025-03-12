// pages/Inicio.js
import Comissao from './ui/comissao';
import Indicadores from './ui/indicadores';
import Mapa from './ui/mapa';
import Programacao from './ui/progamacao';
import Proposta from './ui/proposta';
import Slider from './ui/slider';
import Tema from './ui/tema';

export default function Inicio() {
  return (
    <div>
      <Slider />
      <section id="tema"><Tema /></section>
      <section id="mapa"><Mapa /></section>
      <section id="programacao"><Programacao/></section>
      <Proposta/>
      <Indicadores />
      <Comissao />
    </div>
  );
}

