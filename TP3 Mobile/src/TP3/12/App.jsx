
import Menu from './components/Menu';
import VideoDestaque from './components/VideoDestaque';
import DescricaoVideo from './components/Descricao';
import Propaganda from './components/Propaganda';
import VideosRelacionados from './components/VideosRelacionados';
import Comentarios from './components/Comentarios';
import './main.css'; 

const App = () => {
  return (
    <div className="container">
      <Menu />
      <div className="conteudo">
        <VideoDestaque />
        <DescricaoVideo />
        <Propaganda />
        <VideosRelacionados />
        <Comentarios />
      </div>
    </div>
  );
};

export default App;
