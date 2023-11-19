const Label = ({result, title}) => (
    <label className="form__label form__label--result">
        <span>{title}</span>
        <strong> {result}</strong>
    </label>
)

export default Label