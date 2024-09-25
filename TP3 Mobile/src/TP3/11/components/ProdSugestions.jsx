import './ProdutosRelacionados.css';
import PropTypes from 'prop-types';


const ProdutosRelacionados = ({ produtos }) => {
  return (
    <div className="produtos-relacionados">
      {produtos.map((produto, index) => (
        <div key={index} className="produto-relacionado">
          <img src={produto.imagem} alt={produto.nome} />
          <p>{produto.nome}</p>
          <p>{produto.valor}</p>
        </div>
      ))}
    </div>
  );
};

ProdutosRelacionados.propTypes = {
    produtos: PropTypes.arrayOf(
      PropTypes.shape({
        imagem: PropTypes.string.isRequired,
        nome: PropTypes.string.isRequired,
        valor: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
  

export default ProdutosRelacionados;