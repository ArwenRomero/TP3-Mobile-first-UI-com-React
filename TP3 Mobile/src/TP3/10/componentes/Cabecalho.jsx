import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Cabecalho = () => {
  return (
    <AppBar position="static" className="cabecalho">
      <Toolbar className="toolbar-cabecalho">
        <Typography variant="h6" className="titulo-cabecalho">
          TP3 Arwen Mobile First
        </Typography>
        <FontAwesomeIcon icon={faUser} className="icone-perfil" />
      </Toolbar>
    </AppBar>
  );
};

export default Cabecalho;