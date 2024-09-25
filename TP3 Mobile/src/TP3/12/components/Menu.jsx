import './Menu.css';

const Menu = () => {
  return (
    <nav className="menu">
      <button className="menu-toggle">
        ☰
      </button>
      <ul className="menu-itens">
        <li><a href="#home">Início</a></li>
        <li><a href="#explorar">Explorar</a></li>
        <li><a href="#assinaturas">Assinaturas</a></li>
        <li><a href="#configuracoes">Configurações</a></li>
      </ul>
    </nav>
  );
};

export default Menu;
