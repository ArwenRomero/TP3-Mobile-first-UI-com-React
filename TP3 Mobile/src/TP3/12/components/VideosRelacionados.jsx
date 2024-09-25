
import './VideosRelacionados.css';

const videos = [
  { id: 1, nome: 'Vídeo 1', autor: 'Autor 1', capa: 'https://cdn-icons-png.flaticon.com/128/5238/5238429.png' },
  { id: 2, nome: 'Vídeo 2', autor: 'Autor 2', capa: 'https://cdn-icons-png.flaticon.com/128/5776/5776927.png' },
];

const VideosRelacionados = () => {
  return (
    <div className="videos-relacionados">
      {videos.map(video => (
        <div key={video.id} className="video-relacionado">
          <img src={video.capa} alt={`Capa do ${video.nome}`} />
          <p>{video.nome}</p>
          <p>{video.autor}</p>
        </div>
      ))}
    </div>
  );
};

export default VideosRelacionados;
