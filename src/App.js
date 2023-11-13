
import Buttons from "./Buttons"
import { useState } from "react"

function App() {

  const [currency, setCurrency] = useState("")
  const [numbers, setNumbers] = useState("")
  const [result, setResult] = useState("")

  const onFormSubmit = (event) => {
    event.preventDefault();
  }

  const calculateResult = () => {
    if (currency === "Euro") {
      setResult(numbers * 4.43)
    }

    if (currency === "Dolar amerykański") {
      setResult(numbers * 4.13)
    }

    if (currency === "Funt brytyjski") {
      setResult(numbers * 5.05)
    }};

  return (
    <>
      <form className="form" onSubmit={onFormSubmit}>
        <h1 className="form__header">Kalkulator walut</h1>
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
            <option>Wybierz walutę</option>
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
          <Buttons calculateResult={calculateResult} />
        </div>
      </form>
    </>
  );
};

export default App;