export const Select = ({ setCurrency, currency, apiCurrenciesData }) => (
    <select className="form__field" value={currency} onChange={(event) => setCurrency(event.target.value)}>
        {apiCurrenciesData.map(value =>
            <option
                key={value.code}
                value={value.code}>
                {value.code}
            </option>)}

    </select>
);