import Buttons from "./Buttons"
import { useState } from "react"
import Label from "./Label"
import Input from "./Input"
import SelectField from "./SelectField"

function App() {

  const values = [
    { id: 1, cash: "Euro", name: "EUR", rate: 4.43 },
    { id: 2, cash: "Dolar amerykański", name: "USD", rate: 4.13 },
    { id: 3, cash: "Funt brytyjski", name: "GBP", rate: 5.05 },
  ];

  const [currency, setCurrency] = useState("Euro");
  const [numbers, setNumbers] = useState("");
  const [result, setResult] = useState("");

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
  };

  return (
    <>
      <form className="form" onSubmit={onFormSubmit}>
        <h1 className="form__header">Kalkulator waluty Euro na PLN</h1>
        <p>
          <Label
            className="form__label"
            title={"Kwota:"} />
          <Input setNumbers={setNumbers} numbers={numbers} />
        </p>
        <p>
          <Label
            className="form__label"
            title={"Waluta:"}
          />
          <SelectField setCurrency={setCurrency} currency={currency} />
        </p>
        <Label result={result} title={"Przelicznik na PLN:"} />
        <div className="buttons">
          <Buttons calculateResult={calculateResult} resetForm={resetForm} />
        </div>
      </form>
    </>
  );
};

export default App;