import React from "react";
import { Box, Container } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUserFriends, faBell } from "@fortawesome/free-solid-svg-icons";
import Cabeçalho from "./componentes/Cabecalho";
import MenuPrincipal from "./componentes/MenuPrincipal";
import FeedPostagens from "./componentes/FeedPostagens";
import RelacaoAmigos from "./componentes/RelacaoAmigos";
import SugestoesAmizade from "./componentes/SugestoesAmizade";
import "./main.css";

const App = () => {
  return (
    <Container maxWidth="lg" className="app-container">
      <Cabeçalho />
      <MenuPrincipal />
      <Box className="layout-social">
        <FeedPostagens />
        <RelacaoAmigos />
        <SugestoesAmizade />
      </Box>
    </Container>
  );
};

export default App;