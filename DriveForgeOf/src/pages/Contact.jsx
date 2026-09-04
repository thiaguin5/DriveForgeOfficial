
import "./Contact.css";

function Contact() {

  function handleSubmit(event) {
    event.preventDefault();

    alert("Mensagem enviada com sucesso!");
  }

  return (
    <section className="contact">

      <div className="contact-info">

        <p>CONTATO</p>

        <h2>
          FALE COM A
          <br />
          DRIVEFORGE
        </h2>

        <p>
          Entre em contato com nossa equipe.
        </p>

      </div>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          placeholder="Seu nome"
          required
        />

        <input
          type="email"
          placeholder="Seu email"
          required
        />

        <textarea
          placeholder="Sua mensagem"
          required
        />

        <button type="submit">
          ENVIAR MENSAGEM
        </button>

      </form>

    </section>
  );
}

export default Contact;