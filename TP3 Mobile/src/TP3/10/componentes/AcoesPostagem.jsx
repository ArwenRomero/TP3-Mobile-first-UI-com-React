import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShare, faCommentDots } from "@fortawesome/free-solid-svg-icons";

const AcoesPostagem = ({ curtidas, compartilhamentos, aoClicarComentarios }) => {
  const [curtido, setCurtido] = useState(false);
  const [compartilhado, setCompartilhado] = useState(false);

  const handleCurtida = () => {
    setCurtido(!curtido);
  };

  const handleCompartilhamento = () => {
    setCompartilhado(!compartilhado);
  };

  return (
    <div className="acoes-postagem">
      <IconButton onClick={handleCurtida} className={curtido ? "animacao-curtida" : ""}>
        <FontAwesomeIcon icon={faHeart} /> {curtidas}
      </IconButton>
      <IconButton onClick={handleCompartilhamento} className={compartilhado ? "animacao-compartilhamento" : ""}>
        <FontAwesomeIcon icon={faShare} /> {compartilhamentos}
      </IconButton>
      <IconButton onClick={aoClicarComentarios}>
        <FontAwesomeIcon icon={faCommentDots} /> Comentários
      </IconButton>
    </div>
  );
};

export default AcoesPostagem;