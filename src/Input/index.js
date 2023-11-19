const Input = ({setNumbers, numbers}) => (
    <input
        className="form__field form__field--value"
        required type="number"
        min="0.1"
        step="any"
        value={numbers}
        onChange={(event) => setNumbers(event.target.value)}
    />
)

export default Input