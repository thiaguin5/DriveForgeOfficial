import "./Header.css";
import { Link } from "react-router";

<nav className="nav">

  <Link to="/">
    INÍCIO
  </Link>

  <Link to="/veiculos">
    VEÍCULOS
  </Link>

  <Link to="/sobre">
    SOBRE NÓS
  </Link>

  <Link to="/financiamento">
    FINANCIAMENTO
  </Link>

  <Link to="/contato">
    CONTATO
  </Link>

</nav>
        

function Header() {
  return (
    <header className="header">
      <div className="header-container">

        <div className="logo">
          <span className="logo-main">DRIVE</span>
          <span className="logo-secondary">FORGE</span>
        </div>

       

      
        <button className="contact-button">
          FALE CONOSCO
        </button>

      </div>
    </header>
  );
}

export default Header;