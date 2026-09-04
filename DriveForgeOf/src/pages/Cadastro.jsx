import { useState } from "react";
import "./Cadastro.css";

function Cadastro() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3000/api/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Erro ao realizar cadastro");
        return;
      }

      console.log("Usuário cadastrado:", data);

      alert("Cadastro realizado com sucesso!");

      // Limpa os campos após o cadastro
      setFormData({
        name: "",
        email: "",
        password: ""
      });

    } catch (error) {
      console.error("Erro ao cadastrar:", error);

      alert("Erro ao conectar com o servidor.");
    }
  }

  return (
    <main className="cadastro-page">

      <div className="cadastro-box">

        <p>DRIVEFORGE</p>

        <h1>CRIE SUA CONTA</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Nome completo"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Senha"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">
            CRIAR CONTA
          </button>

        </form>

      </div>

    </main>
  );
}

export default Cadastro;