const SelectField = ({setCurrency, currency}) => (
    <select className="form__field" value={currency} onChange={(event) => setCurrency(event.target.value)}>
        <option>Frank Szwajcarski</option>
        <option>Euro</option>
        <option>Dolar amerykański</option>
        <option>Funt brytyjski</option>
    </select>
)

export default SelectField