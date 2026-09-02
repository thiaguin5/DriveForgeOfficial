import "./Finance.css";

function Finance() {
  return (
    <section className="finance" id="finance">
      <div className="finance-container">

        <div className="finance-content">

          <div className="finance-text">

            <p className="finance-subtitle">
              FINANCIAMENTO
            </p>

            <h2>
              SEU NOVO CARRO,
              <br />
              <span>DO SEU JEITO.</span>
            </h2>

            <p className="finance-description">
              Encontre as melhores condições para financiar
              seu próximo veículo. Simule agora e descubra
              as opções disponíveis para você.
            </p>

            <div className="finance-benefits">

              <div className="benefit">
                <span className="benefit-number">01</span>

                <div>
                  <h3>SIMULAÇÃO RÁPIDA</h3>

                  <p>
                    Descubra as melhores opções para você.
                  </p>
                </div>
              </div>


              <div className="benefit">
                <span className="benefit-number">02</span>

                <div>
                  <h3>CONDIÇÕES ESPECIAIS</h3>

                  <p>
                    Taxas e condições personalizadas.
                  </p>
                </div>
              </div>


              <div className="benefit">
                <span className="benefit-number">03</span>

                <div>
                  <h3>ATENDIMENTO PERSONALIZADO</h3>

                  <p>
                    Nossa equipe ajuda em todas as etapas.
                  </p>
                </div>
              </div>

            </div>

          </div>


          <div className="finance-card">

            <p className="card-subtitle">
              SIMULE AGORA
            </p>

            <h3>
              QUANTO VOCÊ
              <br />
              PRECISA FINANCIAR?
            </h3>


            <div className="finance-input">

              <label>VALOR DO VEÍCULO</label>

              <input
                type="text"
                placeholder="R$ 0,00"
              />
            </div>


            <div className="finance-input">

              <label>VALOR DA ENTRADA</label>

              <input
                type="text"
                placeholder="R$ 0,00"
              />
            </div>


            <div className="finance-input">

              <label>PARCELAS</label>

              <select>
                <option>12 parcelas</option>
                <option>24 parcelas</option>
                <option>36 parcelas</option>
                <option>48 parcelas</option>
                <option>60 parcelas</option>
              </select>

            </div>


            <button className="finance-button">
              FAZER SIMULAÇÃO
            </button>

            <p className="finance-note">
              Simulação sujeita à análise de crédito.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Finance;