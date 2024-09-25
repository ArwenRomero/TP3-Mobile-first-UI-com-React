import { useState } from 'react';
import './styleC.css';

const MenuResponsivo = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <div className="menu-container">
      <div className="menu-header">
        <img src="https://cdn-icons-png.flaticon.com/128/5968/5968472.png" alt="Logo" className="logo" />
        <button className="botao-menu" onClick={toggleMenu}>
          ☰ 
        </button>
      </div>
      <nav className={`menu-itens ${menuAberto ? 'aberto' : 'fechado'}`}>
        <ul>
          <li><a href="#perfil">Perfil</a></li>
          <li><a href="#postagens">Postagens</a></li>
          <li><a href="#configuracoes">Configurações</a></li>
          <li><a href="#ajuda">Ajuda</a></li>
          <li><a href="#sair">Sair</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuResponsivo;
