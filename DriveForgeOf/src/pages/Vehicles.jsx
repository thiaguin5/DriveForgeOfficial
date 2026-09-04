import { useState } from "react";
import carsData from "..//data/cars";
import "./Vehicles.css";

function Vehicles() {

  const [search, setSearch] = useState("");

  const filteredCars = carsData.filter((car) =>
    `${car.brand} ${car.model}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="vehicles-page">

      <div className="vehicles-title">

        <p>DRIVEFORGE</p>

        <h1>
          NOSSO ESTOQUE
        </h1>

      </div>

      <input
        className="vehicles-search"
        type="text"
        placeholder="Buscar veículo..."
        value={search}
        onChange={(event) =>
          setSearch(event.target.value)
        }
      />

      <div className="cars-grid">

        {filteredCars.map((car) => (

          <div
            className="car-card"
            key={car.id}
          >

            <img
              src={car.image}
              alt={`${car.brand} ${car.model}`}
            />

            <div className="car-info">

              <h2>
                {car.brand} {car.model}
              </h2>

              <p>
                {car.year}
              </p>

              <p>
                {car.mileage}
              </p>

              <h3>
                R$ {car.price.toLocaleString("pt-BR")}
              </h3>

              <p>
                {car.transmission}
              </p>

            </div>

          </div>

        ))}

      </div>

    </main>
  );
}

export default Vehicles;