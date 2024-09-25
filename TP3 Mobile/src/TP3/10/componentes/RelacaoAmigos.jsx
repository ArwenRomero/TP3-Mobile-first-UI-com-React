import React from "react";
import Amigo from "./Amigo";

const RelacaoAmigos = () => {
  const amigos = [
    {
      id: 1,
      nome: "Carlos Souza",
      foto: "https://i.pravatar.cc/150?img=3",
      amigosComuns: 5,
    },
    {
      id: 2,
      nome: "Mariana Oliveira",
      foto: "https://i.pravatar.cc/150?img=2",
      amigosComuns: 8,
    },
    {
        "id": 3,
        "nome": "Ricardo Lopes",
        "foto": "https://i.pravatar.cc/150?img=1",
        "amigosComuns": 2
      },
      {
        "id": 4,
        "nome": "Julia Santos",
        "foto": "https://i.pravatar.cc/150?img=39",
        "amigosComuns": 3
      },
      {
        "id": 5,
        "nome": "Lucas Pereira",
        "foto": "https://i.pravatar.cc/150?img=6",
        "amigosComuns": 1
      }                  
  ];

  return (
    <div className="relacao-amigos">
      <h2>Amigos</h2>
      {amigos.map((amigo) => (
        <Amigo key={amigo.id} {...amigo} />
      ))}
    </div>
  );
};

export default RelacaoAmigos;
