
import './VideoDestaque.css';

const VideoDestaque = () => {
    return (
        <div className="video-destaque">
            <iframe width="700" height="315" src="https://www.youtube.com/embed/A5XW2JLbGYs?si=Gg7sAs-mrWTbDZAb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="acoes-video">
                <button>Curtir</button>
                <button>Compartilhar</button>
                <button>Salvar</button>
                <button>Denunciar</button>
            </div>
            <h1>Introdução à Fundamentação da Metafísica dos Costumes, de I. Kant.</h1>
            <p>Mozart Lacerda Filho</p>
        </div>
    );
};

export default VideoDestaque;
