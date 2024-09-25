import React from "react";
import { Card, CardHeader, Avatar } from "@mui/material";

const SugestaoAmizade = ({ nome, foto, amigoComum }) => {
  return (
    <Card className="card-sugestao-amizade">
      <CardHeader
        avatar={<Avatar src={foto} />}
        title={nome}
        subheader={`Amigo em comum: ${amigoComum}`}
      />
    </Card>
  );
};

export default SugestaoAmizade;
