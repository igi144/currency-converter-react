import { useEffect, useState } from "react"
// import { currencies } from "./currencies";
import { Form } from "./Form";

function App() {

  const [apiCurrencies, setApiCurrencies] = useState([])
  const [currency, setCurrency] = useState("CAD");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");

  console.log(apiCurrencies)

  

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/currency-converter-react/currency.json");
      const responseToJson = await response.json();
      const valuesData = responseToJson.data

      setApiCurrencies(Object.values(valuesData))
    }
    fetchData();
  }, []);

  const onFormSubmit = (event) => {
    event.preventDefault();
  }

  const calculateResult = () => {
    const selectedCurrency = apiCurrencies.find(({ code }) => code === currency);
    const finalResult = amount * selectedCurrency.value

    const positiveValue = () => {
      if (amount <= 0) {
        return
      }
      return finalResult.toFixed(2)
    }

    if (!selectedCurrency) {
      console.error("Currency not found")
      return;
    }
    else {
      setResult(positiveValue)
    }
  };

  const resetForm = () => {
    setCurrency("Euro")
    setAmount("")
    setResult("")
  };

  return (
    <Form
      apiCurrencies={apiCurrencies}
      resetForm={resetForm}
      setCurrency={setCurrency}
      currency={currency}
      calculateResult={calculateResult}
      result={result}
      setAmount={setAmount}
      amount={amount}
      onFormSubmit={onFormSubmit} />
  );
};

export default App;