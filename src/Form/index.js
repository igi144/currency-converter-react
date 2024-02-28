import { Input } from "./Input"
import { Buttons } from "./Buttons"
import { Label } from "./Label"
import { Select } from "./Select"
import { Clock } from "./ShowDate"

export const Form = (
  { resetForm, calculateResult, result, setCurrency, currency, setAmount, amount, onFormSubmit, apiCurrenciesData }
) => {

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <Clock />
      <h1 className="form__header">Kalkulator waluty Euro na PLN</h1>
      <p>
        <Label
          className="form__label form__label--result"
          title="Kwota:" />
        <Input setAmount={setAmount} amount={amount} />
      </p>
      <p>
        <Label
          className="form__label form__label--result"
          title="Waluta:" />
        <Select setCurrency={setCurrency} currency={currency} apiCurrenciesData={apiCurrenciesData} />
      </p>
      <Label
        className="form__label form__label--result"
        title="Przelicznik na PLN:"
        extraContent={<strong className="form__label--amount">{result}</strong>}
      />
      <Buttons
        calculateResult={calculateResult}
        resetForm={resetForm}
      />
    </form >
  )
};