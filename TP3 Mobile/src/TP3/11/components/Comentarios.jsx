import './SecaoComentarios.css';
import PropTypes from 'prop-types';


const SecaoComentarios = ({ comentarios }) => {
  return (
    <div className="secao-comentarios">
      {comentarios.map((comentario, index) => (
        <div key={index} className="comentario">
          <h3>{comentario.nome}</h3>
          <p>{comentario.data}</p>
          <p>{comentario.texto}</p>
        </div>
      ))}
    </div>
  );
};

SecaoComentarios.propTypes = {
    comentarios: PropTypes.arrayOf(
      PropTypes.shape({
        nome: PropTypes.string.isRequired,
        data: PropTypes.string.isRequired,
        texto: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
export default SecaoComentarios;