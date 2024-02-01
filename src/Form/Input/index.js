export const Input = ({setAmount, amount}) => (
    <input
        type="number"
        className="form__field form__field--value"
        min="0.1"
        step="any"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
    />
);