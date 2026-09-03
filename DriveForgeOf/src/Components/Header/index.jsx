import "./Header.css";
import { Link } from "react-router";

const resposta = await fetch(
    "https://api.pexels.com/v1/search?query=carro&per_page=10",
    {
        headers: {
            Authorization: "SUA_API_KEY"
        }
    }
);

const dados = await resposta.json();

console.log(dados.photos);


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

  <Link to="/Cadastro">
    Cadastro
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