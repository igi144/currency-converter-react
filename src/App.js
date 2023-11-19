
import Buttons from "./Buttons"
import { useState } from "react"

function App() {

  const values = [
    { id: 1, cash: "Euro", name: "EUR", rate: 4.43 },
    { id: 2, cash: "Dolar amerykański", name: "USD", rate: 4.13 },
    { id: 3, cash: "Funt brytyjski", name: "GBP", rate: 5.05 },
  ]

  const [currency, setCurrency] = useState("Euro")
  const [numbers, setNumbers] = useState("")
  const [result, setResult] = useState("")

  const onFormSubmit = (event) => {
    event.preventDefault();
  }

  const calculateResult = () => {
    const isCurrency = values.find(({ cash }) => cash === currency);

    if (isCurrency) {
      setResult(numbers * isCurrency.rate)
    }
    else {
      console.error("Currency not found")
    }
  };

  const resetForm = () => {
    setCurrency("Euro")
    setNumbers("")
    setResult("")
  }

  return (
    <>
      <form className="form" onSubmit={onFormSubmit}>
        <h1 className="form__header">Kalkulator waluty Euro na PLN</h1>
        <p>
          <label><span className="form__label">Kwota:</span></label>
          <input
            className="form__field"
            required type="number"
            min="0.1"
            step="any"
            value={numbers}
            onChange={(event) => setNumbers(event.target.value)}
          />
        </p>
        <p>
          <label className="form__label">Waluta</label>
          <select className="form__field" value={currency} onChange={(event) => setCurrency(event.target.value)}>
            <option>Euro</option>
            <option>Dolar amerykański</option>
            <option>Funt brytyjski</option>
          </select>
        </p>
        <label className="form__label form__label--result">
          <span>Przelicznik na PLN:</span>
          <strong> {result}</strong>
        </label>
        <div className="buttons">
          <Buttons calculateResult={calculateResult} resetForm={resetForm} />
        </div>
      </form>
    </>
  );
};

export default App;