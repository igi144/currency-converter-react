import { Clock } from "./Form/ShowDate"
import { AlternativeAppViewStyle } from "./AlternativeAppViewStyles";
import { WaitingText } from "./AlternativeAppViewStyles";

export const LoadingAppView = () => {
    return (
        <AlternativeAppViewStyle>
            <Clock />
            <h1 className="form__header">Kalkulator waluty Euro na PLN</h1>
            <WaitingText>Wczytywanie danych z sieci 😎</WaitingText>
        </AlternativeAppViewStyle>
    )
};