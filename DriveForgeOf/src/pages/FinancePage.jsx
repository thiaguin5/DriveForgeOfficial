import { useState } from "react";
import "./FinanceP.css";

function FinancePage() {

  const [value, setValue] = useState("");
  const [months, setMonths] = useState("48");

  const [result, setResult] =
    useState(null);

  function calculateFinance(event) {

    event.preventDefault();

    const carValue =
      Number(value);

    const installments =
      carValue / Number(months);

    setResult(installments);

  }

  return (
    <main className="finance-page">

      <div className="finance-title">

        <p>DRIVEFORGE</p>

        <h1>
          SIMULE SEU
          FINANCIAMENTO
        </h1>

      </div>

      <form
        className="finance-form"
        onSubmit={calculateFinance}
      >

        <label>
          Valor do veículo
        </label>

        <input
          type="number"
          placeholder="Ex: 300000"
          value={value}
          onChange={(event) =>
            setValue(event.target.value)
          }
          required
        />

        <label>
          Número de parcelas
        </label>

        <select
          value={months}
          onChange={(event) =>
            setMonths(event.target.value)
          }
        >

          <option value="12">
            12 meses
          </option>

          <option value="24">
            24 meses
          </option>

          <option value="36">
            36 meses
          </option>

          <option value="48">
            48 meses
          </option>

          <option value="60">
            60 meses
          </option>

        </select>

        <button type="submit">
          CALCULAR
        </button>

      </form>

      {result && (

        <div className="finance-result">

          <h2>
            Parcela estimada
          </h2>

          <h3>
            R$ {result.toLocaleString(
              "pt-BR",
              {
                minimumFractionDigits: 2
              }
            )}
          </h3>

          <p>
            Simulação aproximada sem
            considerar juros bancários.
          </p>

        </div>

      )}

    </main>
  );
}

export default FinancePage;