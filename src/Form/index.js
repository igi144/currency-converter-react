import { Input } from "./Input"
import { Buttons } from "./Buttons"
import { Label } from "./Label"
import { Select } from "./Select"
import { Clock } from "./ShowDate"
import { LastUpdatedData } from "./LastUpdatedData"

export const Form = (
  { resetForm,
    calculateResult,
    result,
    setCurrency,
    currency,
    setAmount,
    amount,
    onFormSubmit,
    apiCurrenciesData,
    apiLastDate,
  }
) => {
  return (
    <form className="form" onSubmit={onFormSubmit}>
      <Clock />
      <h1 className="form__header">Kalkulator waluty Euro na PLN</h1>
      <div className="form__fields">
        <p>
          <Label
            title="Kwota w PLN:" />
          <Input setAmount={setAmount} amount={amount} />
        </p>
        <p>
          <Label
            title="Waluta:" />
          <Select
            className="form__select"
            setCurrency={setCurrency}
            currency={currency}
            apiCurrenciesData={apiCurrenciesData}
          />
        </p>
      </div>
      <Label
        className="form__label"
        title="Przelicznik na podaną walutę:"
        extraContent={<strong>{result}</strong>}
      />
      <LastUpdatedData apiLastDate={apiLastDate} />
      <Buttons
        calculateResult={calculateResult}
        resetForm={resetForm}
      />
    </form >
  )
};