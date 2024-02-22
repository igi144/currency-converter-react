// import { currencies } from "../../currencies";

export const Select = ({setCurrency, currency, apiCurrencies }) => (
    <select className="form__field" value={currency} onChange={(event) => setCurrency(event.target.value)}>
        {apiCurrencies.map(currency =>
            <option
                key={currency.name}
                value={currency.name}
            >
                {currency.name}
            </option>)}
    </select>
);