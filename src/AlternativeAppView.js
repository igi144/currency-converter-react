import { Clock } from "./Form/ShowDate"
import { AlternativeAppViewStyle } from "./AlternativeAppViewStyles"
import { WarningText } from "./AlternativeAppViewStyles"

export const AlternativeAppView = () => {
    return (
        <AlternativeAppViewStyle>
            <Clock />
            <h1 className="form__header">Kalkulator waluty Euro na PLN</h1>
            <WarningText>Coś jest nie tak z Twoim połączeniem internetowym. 😒</WarningText>
        </AlternativeAppViewStyle >
    )
};