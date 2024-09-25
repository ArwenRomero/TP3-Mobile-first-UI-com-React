function ExibirItem({ item, aoEscolherPreferencia, aoMostrarAfinidade, temMaisItens }) {
  if (!temMaisItens) {
    return (
      <div>
        <p>Você avaliou todos os itens!</p>
        <button onClick={aoMostrarAfinidade}>Ver lista de afinidade</button>
      </div>
    );
  }

  return (
    <div>
      <h2>{item}</h2>
      <button onClick={() => aoEscolherPreferencia(item, 'gostos')}>Gosto</button>
      <button onClick={() => aoEscolherPreferencia(item, 'naoGostos')}>Não gosto</button>
    </div>
  );
}

export default ExibirItem;
