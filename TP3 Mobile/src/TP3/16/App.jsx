import { useState } from 'react';
import ListaPontosTuristicos from './components/Hoteis/ListaPontos';
import PontosSelecionados from './components/Hoteis/PontosSelec';
import Header from "./components/Header/Header.jsx"
import './main.css';


const dadosPontos = [
  { id: 1, nome: 'Parque Nacional do Pantanal', info: 'Reserva natural protegida com rica biodiversidade.', transporte: 'Barco, Carro, A pé', preco: 120, imagem: 'https://cdn-icons-png.flaticon.com/128/10912/10912054.png' },
  { id: 2, nome: 'Transpantaneira', info: 'Estrada cênica com rica fauna e flora ao longo do percurso.', transporte: 'Carro', preco: 80, imagem: 'https://cdn-icons-png.flaticon.com/128/3039/3039008.png' },
  { id: 3, nome: 'Rio Paraguai', info: 'Importante rio da bacia do Pantanal, famoso pelos passeios de barco.', transporte: 'Barco', preco: 70, imagem: 'https://cdn-icons-png.flaticon.com/128/1776/1776975.png' },
  { id: 4, nome: 'Lagoa das Araras', info: 'Área de observação de araras e outras aves.', transporte: 'Carro, A pé', preco: 50, imagem: 'https://cdn-icons-png.flaticon.com/128/3719/3719852.png' },
  { id: 5, nome: 'Pousada do Pantanal', info: 'Hospedagem típica com passeios e safáris para observação de animais.', transporte: 'Carro, Barco, A pé', preco: 200, imagem: 'https://cdn-icons-png.flaticon.com/128/2548/2548679.png' }
];

function App() {
  const [pontosSelecionados, setPontosSelecionados] = useState([]);

  const aoSelecionarPonto = (ponto) => {
    setPontosSelecionados((prev) => [...prev, ponto]);
  };

  return (
    <>
    <Header />
    <div className="App">
      <h1>Pontos Turísticos</h1>
      <ListaPontosTuristicos pontos={dadosPontos} aoSelecionar={aoSelecionarPonto} />
      <PontosSelecionados pontosSelecionados={pontosSelecionados} />
    </div>
    </>
  );
}

export default App;
