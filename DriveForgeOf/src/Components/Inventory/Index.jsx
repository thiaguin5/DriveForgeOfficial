import "./Inventory.css";
import cars from "../../data/cars";

function Inventory() {
  return (
    <section className="inventory" id="cars">

      <div className="inventory-container">

        <div className="inventory-header">

          <div className="inventory-title">
            <p>NOSSO ESTOQUE</p>

            <h2>
              VEÍCULOS
              <span> DISPONÍVEIS</span>
            </h2>
          </div>

          <button className="view-all-button">
            VER TODOS OS VEÍCULOS
          </button>

        </div>


        <div className="cars-grid">

          {cars.map((car) => (

            <div className="car-card" key={car.id}>

              <div className="car-image-container">

                <img
                  src={car.image}
                  alt={car.name}
                  className="car-image"
                />

                <span className="car-status">
                  DISPONÍVEL
                </span>

              </div>


              <div className="car-info">

                <div className="car-title">

                  <h3>{car.name}</h3>

                  <p>{car.year}</p>

                </div>


                <div className="car-details">

                  <span>{car.km} KM</span>

                  <span>{car.transmission}</span>

                  <span>{car.fuel}</span>

                </div>


                <div className="car-footer">

                  <div className="car-price">

                    <span>POR APENAS</span>

                    <strong>{car.price}</strong>

                  </div>


                  <button className="details-button">
                    VER DETALHES
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Inventory;