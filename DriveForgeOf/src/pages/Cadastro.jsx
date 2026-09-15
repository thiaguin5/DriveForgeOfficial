import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cadastro() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {

        event.preventDefault();

        try {

            const response = await fetch(
                "http://localhost:3000/api/users",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        name,
                        email,
                        password
                    })
                }
            );

            const data = await response.json();

            if (!response.ok) {
                alert(data.message);
                return;
            }

            alert("Cadastro realizado com sucesso!");

            // Vai para a página Usuarios
            navigate("/usuarios");

        } catch (error) {

            console.error(error);

            alert("Erro ao conectar com a API.");

        }
    };

    return (
        <div>

            <h1>Cadastro</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">
                    Cadastrar
                </button>

            </form>

        </div>
    );
}

export default Cadastro;