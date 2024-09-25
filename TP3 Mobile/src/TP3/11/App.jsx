
import './main.css';
import Menu from './components/Menu';
import DetalhesProduto from './components/DetalheProduto';
import GaleriaImagens from './components/GaleriaImagens';
import ProdutosRelacionados from './components/ProdSugestions';
import SecaoComentarios from './components/Comentarios';

const App = () => {
  const produto = {
    nome: "Produto Exemplo",
    valor: "R$ 2099,99",
    descricao: "Descricao do produto.",
    especificacoes: ["Cor: Azul", "Marca: Nvidia", "Ano: 2023"]
  };

  const imagens = ["https://cdn-icons-png.flaticon.com/128/2656/2656271.png", "https://cdn-icons-png.flaticon.com/128/8900/8900415.png", "https://cdn-icons-png.flaticon.com/128/11152/11152748.png"];

  const produtosRelacionados = [
    { imagem: "https://cdn-icons-png.flaticon.com/128/2656/2656271.png", nome: "Produto 1", valor: "R$ 2099,99" },
    { imagem: "https://cdn-icons-png.flaticon.com/128/5708/5708095.png", nome: "Produto 2", valor: "R$ 3999,99" }
  ];

  const comentarios = [
    { nome: "Arwen", data: "29/08/2024", texto: "Rodou tudo que tinha pra rodar 🙏🙏" },
    { nome: "Gustavo", data: "05/09/2024", texto: "Placa veio defeituosa, com artefato, vou colcar o nome de vcs no Reclme Aqui!!!" }
  ];

  return (
    <div className="App">
      <Menu />
      <GaleriaImagens imagens={imagens} />
      <DetalhesProduto {...produto} />
      <ProdutosRelacionados produtos={produtosRelacionados} />
      <SecaoComentarios comentarios={comentarios} />
    </div>
  );
};

export default App;
