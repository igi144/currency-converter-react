import { useEffect, useState } from "react"
// import { currencies } from "./currencies";
import { Form } from "./Form";

function App() {

  const [apiCurrencies, setApiCurrencies] = useState([])
  const [currency, setCurrency] = useState();
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");

  console.log(apiCurrencies)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/currency-converter-react/currency.json");
      const responseToJson = await response.json();

      setApiCurrencies(responseToJson)
    }
    fetchData();
  }, []);

  const onFormSubmit = (event) => {
    event.preventDefault();
  }

  // const calculateResult = () => {
  //   const selectedCurrency = currencies.find(({ name }) => name === currency);

  //   const positiveValue = () => {
  //     if (amount <= 0) {
  //       return
  //     }
  //     return amount * selectedCurrency.rate
  //   }

  //   if (!selectedCurrency) {
  //     console.error("Currency not found")
  //     return;
  //   }
  //   else {
  //     setResult(positiveValue)
  //   }
  // };

  const resetForm = () => {
    setCurrency("Euro")
    setAmount("")
    setResult("")
  };

  return (
    <Form
      apiCurrencies={apiCurrencies}
      resetForm={resetForm}
      // calculateResult={calculateResult}
      result={result}
      setCurrency={setCurrency}
      currency={currency}
      setAmount={setAmount}
      amount={amount}
      onFormSubmit={onFormSubmit} />
  );
};

export default App;