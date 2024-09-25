import { useState } from 'react';
import "./styleC.css"

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu">
      <div className="menu-header">
        <img src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png"  alt="Logo" className="logo" />
        <button onClick={handleToggle}>
          <i className="fas fa-user" />
        </button>
      </div>
      <ul className={`menu-list ${isOpen ? 'open' : ''}`}>
        <li>
          <a href="#">Perfil</a>
        </li>
        <li>
          <a href="#">Postagens</a>
        </li>
        <li>
          <a href="#">Amigos</a>
        </li>
        <li>
          <a href="#">Fotos</a>
        </li>
        <li>
          <a href="#">Vídeos</a>
        </li>
        <li>
          <a href="#">Configurações</a>
        </li>
      </ul>
    </div>
  );
};

export default App;