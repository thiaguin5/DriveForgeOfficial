import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        DRIVE<span>FORGE</span>
      </Link>

      <nav className="nav">
        <Link to="/">Início</Link>
        <Link to="/vehicles">Veículos</Link>
        <Link to="/finance">Financiamento</Link>
        <Link to="/cadastro">Cadastro</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/contact">Contato</Link>
         <Link to="/Users">Lista de Usuários</Link>
           <Link to="/SolicitarCompra">Solicitar Compra</Link>
       


         

      </nav>
    </header>
  );
}

export default Header;