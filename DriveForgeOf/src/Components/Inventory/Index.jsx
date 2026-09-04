import { Link } from "react-router-dom";
import "./Inventory.css";

function Inventory({ cars }) {
  return (
    <section className="inventory">

      <div className="section-header">
        <div>
          <p>ESTOQUE</p>
          <h2>VEÍCULOS DISPONÍVEIS</h2>
        </div>

        <Link to="/vehicles">
          VER TODOS →
        </Link>
      </div>

      <div className="cars-grid">

        {cars.slice(0, 4).map((car) => (
          <div className="car-card" key={car.id}>

            <img
              src={car.image}
              alt={`${car.brand} ${car.model}`}
            />

            <div className="car-info">

              <h3>
                {car.brand} {car.model}
              </h3>

              <p>
                {car.year} • {car.mileage}
              </p>

              <h4>
                R$ {car.price.toLocaleString("pt-BR")}
              </h4>

            </div>

            {/* BOTÃO DE COMPRA */}
            <button className="buy-car-button">
              SOLICITAR CONTATO
            </button>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Inventory;