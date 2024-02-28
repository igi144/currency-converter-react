// import { currencies } from "../../currencies";

export const Select = ({ setCurrency, currency, apiCurrencies }) => (
    <select className="form__field" value={currency} onChange={(event) => setCurrency(event.target.value)}>
        {apiCurrencies.map(value =>
            <option
                key={value.code}
                value={value.code}>
                {value.code}
            </option>)}

    </select>
);