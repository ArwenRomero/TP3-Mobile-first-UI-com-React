import { useState } from 'react';
import './AppC.css';


const App = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <header>
                <div className="logo">
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/15375/15375907.png"
                        alt="Logo"
                        className="logo-img"
                    />
                </div>
                <button className="menu-toggle" onClick={toggleMenu}>
                    &#9776;
                </button>
                <nav className={`menu ${menuOpen ? 'active' : ''}`}>
                    <ul>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#produtos">Produtos</a>
                        </li>
                        <li>
                            <a href="#servicos">Serviços</a>
                        </li>
                        <li>
                            <a href="#contato">Contato</a>
                        </li>
                        <li>
                            <a href="#sobre">Sobre</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default App;
