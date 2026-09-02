import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <p className="hero-subtitle">
          EXCLUSIVIDADE SOBRE QUATRO RODAS
        </p>

        <h1>
          ENCONTRE O CARRO
          <br />
          <span>DOS SEUS SONHOS.</span>
        </h1>

        <p className="hero-description">
          Veículos selecionados para pessoas que buscam
          performance, luxo e exclusividade.
        </p>

        <div className="hero-buttons">
          <button className="primary-button">
            VER VEÍCULOS
          </button>

          <button className="secondary-button">
            CONHEÇA A LOJA
          </button>
        </div>

      </div>

      <div className="hero-scroll">
       
        <div className="scroll-line"></div>
      </div>

    </section>
  );
}

export default Hero;