import "./Search.css";

function Search() {
  return (
    <section className="search-section">

      <div className="search-container">

        <div className="search-title">
          <p>ENCONTRE SEU VEÍCULO</p>
          <h2>BUSQUE O CARRO IDEAL</h2>
        </div>

        <div className="search-form">

          <div className="search-group">
            <label>MARCA</label>

            <select>
              <option value="">Todas as marcas</option>
              <option>BMW</option>
              <option>Audi</option>
              <option>Mercedes-Benz</option>
              <option>Porsche</option>
              <option>Ferrari</option>
            </select>
          </div>

          <div className="search-group">
          

            
          </div>

          <div className="search-group">
            <label>FAIXA DE PREÇO</label>

            <select>
              <option value="">Qualquer preço</option>
              <option>Até R$ 100.000</option>
              <option>R$ 100.000 - R$ 300.000</option>
              <option>R$ 300.000 - R$ 500.000</option>
              <option>Acima de R$ 500.000</option>
            </select>
          </div>

          <button className="search-button">
            BUSCAR VEÍCULO
          </button>

        </div>

      </div>

    </section>
  );
}

export default Search;