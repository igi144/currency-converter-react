import Buttons from "./Buttons"
import {useState} from "react"  

function App() {

  const [currencyValue, setCurrency] = useState("")

  const onFormSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className="App">
      <form 
      className="form"
      onSubmit={onFormSubmit}>
        <h1 className="form__header">Kalkulator waluty Euro na PLN</h1>
        <p>
          <label for="euro"><span className="form__label">Kwota:</span></label>
          <input 
          className="form__field"
          id="euro" 
          name="eurovalue" 
          required type="number" 
          min="0.1" 
          step="any" 
          value={currencyValue}
          onChange={(event)=>setCurrency(event.target.value)}/>
        </p>
        <p>
          <label className="form__label">Waluta</label>
          <select className="form__field" name="currency">
            <option value="EUR">Euro</option>
            <option value="USD">Dolar amerykański</option>
            <option value="GBP">Funt brytyjski</option>
          </select>
        </p>
        <label className="form__label form__label--result"><span>Przelicznik na PLN:</span> <strong>0</strong>
        </label>
        <Buttons />
      </form>
    </div>
  );
}

export default App;
