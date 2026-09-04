import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import "./Users.css"

export default function index() {

    // UseState do React para gerenciar o estado dos usuários
    const [usuarios, setUsuarios] = useState([])

    // Busca os usuários quando o componente for montado
    useEffect(() => {

        fetch("http://localhost:3000/users")
            .then((response) => response.json())
            .then((data) => setUsuarios(data))
            .catch((error) => console.error("Erro na API", error))

    }, [])

    console.log(usuarios)

const deletarUsuario = (id) => {
    console.log("ID clicado:", id);
    console.log("Usuários:", usuarios);

    fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE",
    })
    .then(() => {
        setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
    })
    .catch((error) => console.error("Erro na API", error));
};

    return (
        <main className="containerUsers">

            <h1>Lista de Usuários</h1>

            <section className="contentUsers">
            {usuarios.map((user) => (
                <article key={user.id}>
                    <strong>Nome: {user.nome}</strong>
                    <strong>Email: {user.email}</strong>
                    <strong>Telefone: {user.telefone}</strong>
                    <button 
                        className="btn-delete"
                         onClick={() => deletarUsuario(user.id)}>
                        Deletar {user.nome}
                    </button>

                </article>
            ))}

            </section>

            <Link to="/">Voltar para o inicio</Link>

        </main>
    )
}