import PropTypes from 'prop-types';

import './DetalhesProduto.css';

const DetalhesProduto = ({ nome, valor, descricao, especificacoes }) => {
    return (
        <div className="detalhes-produto">
            <h1>{nome}</h1>
            <p className="valor">{valor}</p>
            <p className="descricao">{descricao}</p>
            <ul className="especificacoes">
                {especificacoes.map((especificacao, index) => (
                    <li key={index}>{especificacao}</li>
                ))}
            </ul>
        </div>
    );
};

DetalhesProduto.propTypes = {
    nome: PropTypes.string.isRequired,
    valor: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
    especificacoes: PropTypes.arrayOf(PropTypes.string).isRequired,
  };
  
export default DetalhesProduto;
