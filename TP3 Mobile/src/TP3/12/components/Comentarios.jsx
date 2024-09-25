import './Comentarios.css';

const comentarios = [
  { id: 1, nome: 'Arwen', data: '03/01/2024', comentario: 'Muito bom, entendi pouco.' },
  { id: 2, nome: 'Roberto', data: '01/01/2024', comentario: 'Muito boa aula, obrigada. Mas sugiro evitar abertura longa e barulhenta.' },
];

const Comentarios = () => {
  return (
    <div className="comentarios">
      {comentarios.map(comentario => (
        <div key={comentario.id} className="comentario">
          <p><strong>{comentario.nome}</strong> - {comentario.data}</p>
          <p>{comentario.comentario}</p>
        </div>
      ))}
    </div>
  );
};

export default Comentarios;