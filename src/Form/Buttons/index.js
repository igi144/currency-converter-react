import "./style.css" 

export const Buttons = ({calculateResult, resetForm}) => (
    <div className="buttons">
        <button className="button button--count" onClick={calculateResult}>
            Przelicz
        </button>
        <button className="button button--reset" onClick={resetForm}>
            Wyzeruj
        </button>
    </div>
);