import "./style.css"

const Buttons = ({calculateResult}) => (
    <>
        <button className="button button--count" onClick={()=> calculateResult()}>
            Przelicz
        </button>
        <button className="button button--reset" type="reset">
            Wyzeruj
        </button>
    </>

)

export default Buttons





