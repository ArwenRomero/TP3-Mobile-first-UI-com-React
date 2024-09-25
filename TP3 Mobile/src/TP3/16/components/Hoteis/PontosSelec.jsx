import { useState } from 'react';

const PontosSelecionados = ({ pontosSelecionados }) => {
  const [quantidadePessoas, setQuantidadePessoas] = useState(1);

  const valorTotal = pontosSelecionados.reduce(
    (total, ponto) => total + ponto.preco * quantidadePessoas,
    0
  );

  return (
    <div className="pontos-selecionados">
      <h2>Pontos selecionados</h2>
      {pontosSelecionados.length === 0 ? (
        <p>Nenhum ponto selecionado</p>
      ) : (
        <ul>
          {pontosSelecionados.map((ponto, index) => (
            <li key={index}>{ponto.nome} - R${ponto.preco}</li>
          ))}
        </ul>
      )}
      <label>
        Número de pessoas:
        <input
          type="number"
          min="1"
          value={quantidadePessoas}
          onChange={(e) => setQuantidadePessoas(e.target.value)}
        />
      </label>
      <h3>Valor total: R${valorTotal}</h3>
    </div>
  );
};

export default PontosSelecionados;
