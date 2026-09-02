import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">

        <div className="logo">
          <span className="logo-main">DRIVE</span>
          <span className="logo-secondary">FORGE</span>
        </div>

        <nav className="nav">
          <a href="#home">INÍCIO</a>
          <a href="#cars">VEÍCULOS</a>
          <a href="#about">SOBRE NÓS</a>
          <a href="#contact">CONTATO</a>
          <a href="#contact">CADASTRAR</a>
        </nav>

        <button className="contact-button">
          FALE CONOSCO
        </button>

      </div>
    </header>
  );
}

export default Header;