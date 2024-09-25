import React, { useState } from "react";
import { Card, CardHeader, CardMedia, CardContent, Typography, Avatar } from "@mui/material";
import AcoesPostagem from "./AcoesPostagem";

const Postagem = ({ imagem, titulo, texto, data, autor, avatar, curtidas, compartilhamentos, comentarios }) => {
  const [mostrarComentarios, setMostrarComentarios] = useState(false);

  const alternarComentarios = () => {
    setMostrarComentarios(!mostrarComentarios);
  };

  return (
    <Card className="card-postagem">
      <CardHeader
        avatar={<Avatar src={avatar} />}
        title={autor}
        subheader={data}
      />
      <CardMedia
        component="img"
        image={imagem}
        alt={titulo}
        className="imagem-postagem"
      />
      <CardContent>
        <Typography variant="h6">{titulo}</Typography>
        <Typography>{texto}</Typography>
        <AcoesPostagem
          curtidas={curtidas}
          compartilhamentos={compartilhamentos}
          aoClicarComentarios={alternarComentarios}
        />
        {mostrarComentarios && (
          <div className={`comentarios-postagem ${mostrarComentarios ? "expandir" : ""}`}>
            {comentarios.map((comentario) => (
              <Typography key={comentario.id} variant="body2" className="comentario">
                {comentario.texto}
              </Typography>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Postagem;