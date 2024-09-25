import { useState } from "react";

import "./Header09C.css"

function Header09() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <header>
                <img src="https://cdn-icons-png.flaticon.com/128/3665/3665909.png" alt="logo" className="logo" />
                <button className="menu-btn" onClick={toggleMenu}>
                    ☰
                </button>
                <nav>
                    <ul className={menuOpen ? "active" : ""}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#servicos">Serviços</a></li>
                        <li><a href="#quem-somos">Sobre nós</a></li>
                        <li><a href="#produtos">Produtos</a></li>
                        <li><a href="#contatos">Contatos</a></li>
                    </ul>
                </nav>
            </header>

            <div id="home" className="sobre">
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/128/1999/1999625.png" alt="profilefoto" />
                </div>
                <div>
                    <h1>Lorem Ipsum</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam justo leo, auctor at ex finibus, faucibus dapibus felis. Fusce viverra quam felis, ut bibendum quam faucibus eu. Vestibulum eget arcu at ligula gravida laoreet non gravida metus. Phasellus eu sem et urna pellentesque condimentum. Aliquam eu mi sit amet turpis volutpat euismod. Maecenas justo nunc, rhoncus ut dictum nec, vulputate et nulla. Nam non est rutrum, euismod elit eget, varius nunc. Donec euismod vestibulum volutpat. Suspendisse rhoncus nisi non tempus imperdiet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent posuere bibendum augue ac mollis.</p>
                </div>
            </div>

            <div id="servicos" className="sobre">
                <div>
                    <h1>Serviços</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam justo leo, auctor at ex finibus, faucibus dapibus felis. Fusce viverra quam felis, ut bibendum quam faucibus eu. Vestibulum eget arcu at ligula gravida laoreet non gravida metus. Phasellus eu sem et urna pellentesque condimentum. Aliquam eu mi sit amet turpis volutpat euismod.</p>
                </div>
            </div>
        </div>
    );
}

export default Header09;