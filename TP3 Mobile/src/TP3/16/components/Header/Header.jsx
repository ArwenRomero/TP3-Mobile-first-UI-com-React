
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">ArwenVago</a>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="">Sobre</a></li>
        <li><a href="">Quartos</a></li>
        <li><a href="">Serviços</a></li>
        <li><a href="">Contato</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
