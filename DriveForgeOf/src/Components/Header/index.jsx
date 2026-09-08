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
<<<<<<< HEAD
         <Link to="/users">Usuários</Link>
=======
         <Link to="/Users">Lista de Usuários</Link>
           <Link to="/SolicitarCompra">Solicitar Compra</Link>
       

>>>>>>> 4292c2416978c56823edefb70e28adb9c81fbfcf

         

      </nav>
    </header>
  );
}

export default Header;