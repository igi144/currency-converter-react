import Buttons from "./Buttons"
import { useState } from "react"
import Label from "./Label"
import Input from "./Input"
import SelectField from "./SelectField"
import FormTitle from "./FormTitle"
import currencies from "./Currencies"

function App() {
  const [currency, setCurrency] = useState(currencies[0].cash);
  const [numbers, setNumbers] = useState("");
  const [result, setResult] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
  }

  const calculateResult = () => {
    const isCurrency = currencies.find(({ cash }) => cash === currency);

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
        <FormTitle />
        <p>
          <Label
            className="form__label"
            title={"Kwota:"} />
          <Input setNumbers={setNumbers} numbers={numbers} />
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