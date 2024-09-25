import React from "react";
import { Card, CardHeader, Avatar } from "@mui/material";

const Amigo = ({ nome, foto, amigosComuns }) => {
  return (
    <Card className="card-amigo">
      <CardHeader
        avatar={<Avatar src={foto} />}
        title={nome}
        subheader={`${amigosComuns} amigos em comum`}
      />
    </Card>
  );
};

export default Amigo;
