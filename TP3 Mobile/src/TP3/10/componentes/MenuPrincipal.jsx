import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUserFriends, faBell } from "@fortawesome/free-solid-svg-icons";

const MenuPrincipal = () => {
  return (
    <BottomNavigation className="menu-principal">
      <BottomNavigationAction label="Início" icon={<FontAwesomeIcon icon={faHome} />} />
      <BottomNavigationAction label="Amigos" icon={<FontAwesomeIcon icon={faUserFriends} />} />
      <BottomNavigationAction label="Notificações" icon={<FontAwesomeIcon icon={faBell} />} />
    </BottomNavigation>
  );
};

export default MenuPrincipal;