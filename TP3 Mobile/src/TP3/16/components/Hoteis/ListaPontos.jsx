
import PontoTuristico from './PontoTuristico';

const ListaPontosTuristicos = ({ pontos, aoSelecionar }) => {
  return (
    <div className="lista-pontos-turisticos">
      {pontos.map((ponto) => (
        <PontoTuristico key={ponto.id} ponto={ponto} aoSelecionar={aoSelecionar} />
      ))}
    </div>
  );
};

export default ListaPontosTuristicos;
