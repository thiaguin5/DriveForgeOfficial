import { useEffect, useState } from "react";

function Usuarios() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        fetch("http://localhost:3000/api/users")
            .then(response => response.json())
            .then(data => {
                setUsers(data);
            })
            .catch(error => {
                console.error("Erro:", error);
            });

    }, []);

    return (
        <div>

            <h1>Usuários</h1>

            {users.length === 0 ? (

                <p>Nenhum usuário cadastrado.</p>

            ) : (

                users.map(user => (

                    <div key={user.id}>

                        <h2>{user.name}</h2>

                        <p>Email: {user.email}</p>

                    </div>

                ))

            )}

        </div>
    );
}

export default Usuarios;