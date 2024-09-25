import  { useState, useEffect } from 'react';
import ExibirItem from './components/Items/MostrarItens';
import ListaAfinidade from './components/ListaDeGosto/Gostos';
import Cabecalho from './components/Header/Header';
import './main.css';

const itens = [
  'Barzinho',
  'Estudos',
  'Verde',
  'Furto',
  'Carne bovina',
  'Frango',
  'Verão',
  'Inverno',
  'Cachorro',
  'Cinema',
  'Viagem',
  'Leitura',
  'Música',
  'Tecnologia',
  'Café',
  'Chocolate'
];

const usuarios = [
  { nome: 'Roberta', gostos: ['Cinema', 'Frango', 'Viagem'], naoGostos: ['Furto', 'Inverno'] },
  { nome: 'Judas', gostos: ['Estudos', 'Inverno', 'Leitura'], naoGostos: ['Frango', 'Verão'] },
  { nome: 'Carlos', gostos: ['Cachorro', 'Verão', 'Barzinho'], naoGostos: ['Verde', 'Leitura'] },
  { nome: 'Neymar', gostos: ['Verde', 'Tecnologia', 'Música'], naoGostos: ['Barzinho', 'Carne bovina'] },
  { nome: 'Fernanda', gostos: ['Café', 'Chocolate', 'Música'], naoGostos: ['Viagem', 'Estudos'] },
  { nome: 'Beatriz', gostos: ['Leitura', 'Cachorro', 'Frango'], naoGostos: ['Cinema', 'Barzinho'] },
  { nome: 'Rafael', gostos: ['Carne bovina', 'Tecnologia', 'Café'], naoGostos: ['Chocolate', 'Verde'] }
];

function App() {
  const [preferenciasUsuario, setPreferenciasUsuario] = useState({ gostos: [], naoGostos: [] });
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [verAfinidade, setVerAfinidade] = useState(false);
  const [tema, setTema] = useState('light');

  useEffect(() => {
    document.body.className = tema;
  }, [tema]);

  const lidarComPreferencia = (item, preferencia) => {
    setPreferenciasUsuario((prev) => ({
      ...prev,
      [preferencia]: [...prev[preferencia], item]
    }));
    setIndiceAtual(indiceAtual + 1);
  };

  const alternarTema = () => {
    setTema((prevTema) => (prevTema === 'light' ? 'dark' : 'light'));
  };

  const mostrarAfinidade = () => {
    setVerAfinidade(true);
  };

  return (
    <div className="App">
      <Cabecalho alternarTema={alternarTema} />
      {verAfinidade ? (
        <ListaAfinidade preferenciasUsuario={preferenciasUsuario} usuarios={usuarios} />
      ) : (
        <ExibirItem
          item={itens[indiceAtual]}
          aoEscolherPreferencia={lidarComPreferencia}
          aoMostrarAfinidade={mostrarAfinidade}
          temMaisItens={indiceAtual < itens.length}
        />
      )}
    </div>
  );
}

export default App;
