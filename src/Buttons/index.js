import "./style.css"

const Buttons = ({calculateResult, resetForm}) => (
    <>
        <button className="button button--count" onClick={()=> calculateResult()}>
            Przelicz
        </button>
        <button className="button button--reset" onClick={resetForm}>
            Wyzeruj
        </button>
    </>

)

export default Buttons





