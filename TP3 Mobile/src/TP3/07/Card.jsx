import PropTypes from 'prop-types'; 
import './styles.css';

const Card = ({ imagem, titulo, descricao, rodape }) => {
  return (
    <div className="card-container">
      <div className="card-imagem">
        <img src={imagem} alt={titulo} />
      </div>
      <div className="card-content">
        <h2 className="card-titulo">{titulo}</h2>
        <p className="card-descricao">{descricao}</p>
        <p className="card-rodape">{rodape}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
    imagem: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
    rodape: PropTypes.string.isRequired,
  };
export default Card;
