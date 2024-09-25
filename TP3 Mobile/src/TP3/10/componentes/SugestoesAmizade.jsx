import React from "react";
import SugestaoAmizade from "./SugestaoAmizade";

const SugestoesAmizade = () => {
  const sugestoes = [
    {
      id: 1,
      nome: "Ana Clara",
      foto: "https://i.pravatar.cc/150?img=34",
      amigoComum: "Pedro Lima",
    },
    {
      id: 2,
      nome: "Lucas Mendes",
      foto: "https://i.pravatar.cc/150?img=23",
      amigoComum: "Maria Silva",
    },
    // Mais sugestões
  ];

  return (
    <div className="sugestoes-amizade">
      <h2>Sugestões de Amizade</h2>
      {sugestoes.map((sugestao) => (
        <SugestaoAmizade key={sugestao.id} {...sugestao} />
      ))}
    </div>
  );
};

export default SugestoesAmizade;
