import { currencies } from "../currencies"
import { useState, useEffect } from "react"

export const Form = (
    { resetForm, calculateResult, result, setCurrency, currency, setAmount, amount, onFormSubmit, }
) => {

    const ShowDate = () => {

        const time = new Date()
        const currentDay = time.toLocaleString("pl", { weekday: "long", day: "numeric", month: "long" })
        const currentHour = time.toLocaleTimeString()

        return (
            <div>Dzisiaj jest {currentDay}, {currentHour}</div>
        )



    }

    const [timer, setTimer] = useState()

    useEffect(() => {

        const myInterval = setInterval

        setTimer(() => {
            myInterval(() => {
                setTimer(count => count + 1)
            })
        })

        return () => {
            clearInterval(myInterval)
        }
    }, [timer])







    return (
        <form className="form" onSubmit={onFormSubmit}>
            <ShowDate />
            <h1 className="form__header">Kalkulator waluty Euro na PLN</h1>
            <p>
                <label className="form__label form__label--result">
                    <span>Kwota:</span>

                </label>
                <input
                    className="form__field form__field--value"
                    required type="number"
                    min="0.1"
                    step="any"
                    value={amount}
                    onChange={(event) => setAmount(event.target.value)}
                />
            </p>
            <p>
                <label className="form__label form__label--result">
                    Waluta:
                </label>
                <select className="form__field" value={currency} onChange={(event) => setCurrency(event.target.value)}>
                    {currencies.map(currency =>
                        <option
                            key={currency.name}
                            value={currency.name}
                        >
                            {currency.name}
                        </option>)}
                </select>
            </p>
            <label className="form__label form__label--result">
                Przelicznik na PLN:
                <strong>{result}</strong>
            </label>
            <div className="buttons">
                <>
                    <button className="button button--count" onClick={calculateResult}>
                        Przelicz
                    </button>
                    <button className="button button--reset" onClick={resetForm}>
                        Wyzeruj
                    </button>
                </>
            </div>
        </form >
    )
}