import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Users.css";

export default function Index() {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {

        fetch("http://localhost:3000/api/users")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erro ao buscar usuários");
                }

                return response.json();
            })
            .then((data) => {
                console.log("Usuários recebidos:", data);
                setUsuarios(data);
            })
            .catch((error) => console.error("Erro na API:", error));

    }, []);

    return (
        <main className="containerUsers">

            <h1>Lista de Usuários</h1>

            <section className="contentUsers">

                {usuarios.length === 0 ? (
                    <p>Nenhum usuário cadastrado.</p>
                ) : (
                    usuarios.map((user) => (
                        <article key={user.id}>
                            <strong>Nome: {user.name}</strong>
                            <strong>Email: {user.email}</strong>
                            <strong>Senha: {user.password}</strong>
                        </article>
                    ))
                )}

            </section>

            <Link to="/">Voltar para o início</Link>

        </main>
    );
}