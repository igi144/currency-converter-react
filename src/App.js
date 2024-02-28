import { useEffect, useState } from "react"
import { Form } from "./Form";

const useApiHook = () => {
  const [apiCurrenciesData, setApiCurrenciesData] = useState([])
  const [apiLastDate, setApiLastDate] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/currency-converter-react/currency.json");
      const responseToJson = await response.json();
      const valuesData = responseToJson.data

      setApiCurrenciesData(Object.values(valuesData))
      setApiLastDate(responseToJson.meta.last_updated_at)
    }
    fetchData();
  }, []);

  return { apiCurrenciesData, apiLastDate }
}

function App() {

  const [currency, setCurrency] = useState("CAD");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");
  const { apiCurrenciesData, apiLastDate } = useApiHook()

  const onFormSubmit = (event) => {
    event.preventDefault();
  }

  const calculateResult = () => {
    const selectedCurrency = apiCurrenciesData.find(({ code }) => code === currency);
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
    setCurrency("CAD")
    setAmount("")
    setResult("")
  };

  return (
    <Form
      apiLastDate={apiLastDate}
      apiCurrenciesData={apiCurrenciesData}
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