import { useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <nav className="menu">
      <div className="menu-all" onClick={alternarMenu}>
        &#9776;
      </div>
      <ul className={menuAberto ? "menu-aberto" : "menu-fechado"}>
        <li>Home</li>
        <li>Produtos</li>
        <li>Sobre</li>
        <li>Contato</li>
      </ul>
    </nav>
  );
};

export default Menu;
