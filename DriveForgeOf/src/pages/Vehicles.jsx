import { useState } from "react";
import Header from "../../components/Header";
import Inventory from "../components/Inventory";


function Vehicles() {

    const [fotos, setFotos] = useState([]);

    const buscarCarros = async () => {
        const resposta = await fetch(
            "https://api.pexels.com/v1/search?query=carro&per_page=10",
            {
                headers: {
                    Authorization: import.meta.env.VITE_PEXELS_API_KEY
                }
            }
        );

        const dados = await resposta.json();

        console.log(dados);

        setFotos(dados.photos);
    };

    return (
        <div>
            <h1>Veículos</h1>

            <button onClick={buscarCarros}>
                Buscar carros
            </button>

            {fotos.map((foto) => (
                <img
                    key={foto.id}
                    src={foto.src.large}
                    alt={foto.alt}
                    width="300"
                />
            ))}
        </div>
    );
}

export default Vehicles;




import Header from "../components/Header";
import Inventory from "../components/Inventory";

function Vehicles() {
  return (
    <>
      <Header />

      <main>
        <Inventory />
      </main>
    </>
  );
}

export default Vehicles;