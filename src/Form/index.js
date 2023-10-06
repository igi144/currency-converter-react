

const Form = ({ Buttons }) => (
    <body>
        <form class="js-form form">
            <h1 class="form__header">Kalkulator waluty Euro na PLN</h1>
            <p>
                <label for="euro"><span class="form__label">Kwota:</span></label>
                <input class="js-amount form__field" id="euro" name="eurovalue" required type="number" min="0.1" step="any" />
            </p>
            <p>
                <label class="form__label">Waluta</label>
                <select class="js-currency form__field" name="currency">
                    <option value="EUR">Euro</option>
                    <option value="USD">Dolar amerykański</option>
                    <option value="GBP">Funt brytyjski</option>
                </select>
            </p>
            <label class="form__label form__label--result"><span>Przelicznik na PLN:</span> <strong
                class="js-result">0</strong></label>
            <Buttons />
        </form>
    </body>
)

export default Form