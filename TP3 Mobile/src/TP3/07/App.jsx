
import Cartao from './Card';

function App() {
  return (
    <div className="container mt-4">
      <Cartao
        imagem="https://cdn-icons-png.flaticon.com/128/5968/5968830.png"
        titulo="Título do Card"
        descricao="Descrição: RIP pro X 😭🙏"
        rodape="Rodapé do Card"
      />
    </div>
  );
}

export default App;
