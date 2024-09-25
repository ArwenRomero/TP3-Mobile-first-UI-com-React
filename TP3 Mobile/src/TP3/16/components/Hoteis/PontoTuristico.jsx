

const PontoTuristico = ({ ponto, aoSelecionar }) => {
  return (
    <div className="ponto-turistico">
      <img src={ponto.imagem} alt={ponto.nome} className="imagem-hotel" />
      <h3>{ponto.nome}</h3>
      <p>{ponto.info}</p>
      <p>Meio de transporte: {ponto.transporte}</p>
      <p>Valor por pessoa: R${ponto.preco}</p>
      <button onClick={() => aoSelecionar(ponto)}>Selecionar</button>
    </div>
  );
};

export default PontoTuristico;
