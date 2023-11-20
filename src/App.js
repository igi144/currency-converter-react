import Buttons from "./Buttons"
import { useState } from "react"
import Label from "./Label"
import Input from "./Input"
import SelectField from "./SelectField"
import FormHeader from "./FormHeader"

function App() {
  const currencies = [
    { id: 1, name: "Euro", symbol: "EUR", rate: 4.43 },
    { id: 2, name: "Dolar amerykański", symbol: "USD", rate: 4.13 },
    { id: 3, name: "Funt brytyjski", symbol: "GBP", rate: 5.05 },
  ];

  const [currency, setCurrency] = useState(currencies[0].name);
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
  }

  const calculateResult = () => {
    const selectedCurrency = currencies.find(({ name }) => name === currency);

    if (!selectedCurrency ) {
      console.error("Currency not found")
      return;
    }
    else {
      setResult(amount * selectedCurrency.rate)
    }
  };

  const resetForm = () => {
    setCurrency("Euro")
    setAmount("")
    setResult("")
  };

  return (
    <>
      <form className="form" onSubmit={onFormSubmit}>
        <FormHeader />
        <p>
          <Label
            className="form__label"
            title={"Kwota:"} />
          <Input setAmount={setAmount} amount={amount} />
        </p>
        <p>
          <Label title={"Waluta:"}
          />
          <SelectField setCurrency={setCurrency} currency={currency} />
        </p>
        <Label title={"Przelicznik na PLN:"} result={result} />
        <div className="buttons">
          <Buttons calculateResult={calculateResult} resetForm={resetForm} />
        </div>
      </form>
    </>
  );
};

export default App;