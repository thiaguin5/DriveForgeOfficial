import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">
          DRIVEFORGE PREMIUM MOTORS
        </p>

        <h1>
          ENCONTRE O CARRO
          <br />
          DOS SEUS SONHOS
        </h1>

        <p>
          Veículos selecionados para quem procura
          desempenho, luxo e exclusividade.
        </p>

        <Link to="/vehicles" className="hero-button">
          VER VEÍCULOS
        </Link>
      </div>
    </section>
  );
}

export default Hero;