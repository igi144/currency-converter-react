import { useState } from "react"
import { currencies } from "./currencies";
import { Form } from "./Form";

function App() {
  const [currency, setCurrency] = useState(currencies[0].name);
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
  }

  const calculateResult = () => {
    const selectedCurrency = currencies.find(({ name }) => name === currency);

    if (!selectedCurrency) {
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
      <Form
        resetForm={resetForm}
        calculateResult={calculateResult}
        result={result}
        setCurrency={setCurrency}
        currency={currency}
        setAmount={setAmount}
        amount={amount}
        onFormSubmit={onFormSubmit} />
    </>
  );
};

export default App;