import "./About.css";

function About() {
  return (
    <section className="about">

      <div className="about-content">

        <p>SOBRE NÓS</p>

        <h2>
          A EXPERIÊNCIA
          <br />
          DRIVEFORGE
        </h2>

        <p>
          A DriveForge é uma loja de veículos focada
          em qualidade, confiança e exclusividade.
        </p>

        <p>
          Nosso objetivo é conectar pessoas aos
          melhores veículos, oferecendo uma experiência
          moderna e segura.
        </p>

      </div>

      <div className="about-stats">

        <div>
          <h3>+100</h3>
          <p>VEÍCULOS</p>
        </div>

        <div>
          <h3>+500</h3>
          <p>CLIENTES</p>
        </div>

        <div>
          <h3>100%</h3>
          <p>CONFIANÇA</p>
        </div>

      </div>

    </section>
  );
}

export default About;