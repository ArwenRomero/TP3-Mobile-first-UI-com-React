import React from "react";
import Postagem from "./Postagem";

const FeedPostagens = () => {
  const postagens = [
    {
      id: 1,
      imagem: "https://i.pravatar.cc/500?img=38",
      titulo: "Primeira Postagem",
      texto: "Esse é minha primeira postagem na minha propria rede social pro AT de Mobile.",
      data: "13 de Setembro",
      autor: "Arwen Romero",
      avatar: "https://i.pravatar.cc/150?img=2",
      curtidas: 4,
      compartilhamentos: 2,
      comentarios: [
        { id: 1, texto: "Ótima postagem!" },
        { id: 2, texto: "Gostei muito." },
      ],
    },
    {
        "id": 2,
        "imagem": "https://i.pravatar.cc/500?img=20",
        "titulo": "Reflexões sobre a Filosofia Moderna",
        "texto": "Hoje, passei a manhã lendo sobre os pensamentos de filósofos contemporâneos. A filosofia moderna nos ensina a questionar não apenas o mundo ao nosso redor, mas também nossas próprias crenças. Estou especialmente fascinado por como essas ideias podem ser aplicadas no dia a dia, ajudando a tomar decisões mais conscientes.",
        "data": "2024-09-12",
        "autor": "João Silva",
        "avatar": "https://i.pravatar.cc/150?img=57",
        "curtidas": 17,
        "compartilhamentos": 3,
        "comentarios": [
          { "id": 1, "texto": "Muito interessante! Quais filósofos você recomenda?" },
          { "id": 2, "texto": "A filosofia realmente nos faz refletir sobre a vida." }
        ]
      },
      {
        "id": 3,
        "imagem": "https://i.pravatar.cc/500?img=45",
        "titulo": "A Magia da Música Clássica",
        "texto": "Hoje descobri uma nova playlist de música clássica que me transportou para outro mundo. A beleza de composições de Mozart e Beethoven é indescritível. Estou pensando em começar a tocar piano novamente para me conectar mais com essa arte.",
        "data": "2024-09-10",
        "autor": "Ana Clara",
        "avatar": "https://i.pravatar.cc/150?img=43",
        "curtidas": 20,
        "compartilhamentos": 5,
        "comentarios": [
          { "id": 1, "texto": "Música clássica é tão relaxante! Qual é a sua peça favorita?" },
          { "id": 2, "texto": "Que lindo! Voltar a tocar piano seria incrível." }
        ]
      },
      {
        "id": 4,
        "imagem": "https://i.pravatar.cc/500?img=31",
        "titulo": "Uma Aventura de Acampamento",
        "texto": "No último fim de semana, fui acampar com alguns amigos em uma linda floresta. A experiência de estar em contato com a natureza foi revigorante. Montamos a barraca, fizemos uma fogueira e contámos histórias sob as estrelas. Mal posso esperar para repetir essa experiência!",
        "data": "2024-09-09",
        "autor": "Carlos Oliveira",
        "avatar": "https://i.pravatar.cc/150?img=55",
        "curtidas": 12,
        "compartilhamentos": 2,
        "comentarios": [
          { "id": 1, "texto": "Que incrível! Onde você acampou?" },
          { "id": 2, "texto": "Amo acampar! Precisamos ir juntos na próxima vez." }
        ]
      },
      {
        "id": 5,
        "imagem": "https://i.pravatar.cc/500?img=12",
        "titulo": "Cuidando do Meu Novo Amigo Peludo",
        "texto": "Recentemente, adotei um filhote de cachorro chamado Max. Ele é cheio de energia e já se tornou parte da minha família. Estou aprendendo muito sobre como cuidar dele e garantir que ele tenha uma vida feliz e saudável. As travessuras dele sempre me fazem sorrir.",
        "data": "2024-09-07",
        "autor": "Mariana Souza",
        "avatar": "https://i.pravatar.cc/150?img=39",
        "curtidas": 25,
        "compartilhamentos": 4,
        "comentarios": [
          { "id": 1, "texto": "Parabéns pela adoção! O Max é muito fofo!" },
          { "id": 2, "texto": "Amo pets! Que legal ver você cuidando dele." }
        ]
      }      
  ];

  return (
    <div className="feed-postagens">
      {postagens.map((postagem) => (
        <Postagem key={postagem.id} {...postagem} />
      ))}
    </div>
  );
};

export default FeedPostagens;