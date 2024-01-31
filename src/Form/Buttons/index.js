import { Section } from "./styled"
import { SectionButtons } from "./styled"

export const Buttons = ({calculateResult, resetForm}) => (
    <Section>
        <SectionButtons $count onClick={calculateResult}>
            Przelicz
        </SectionButtons>
        <SectionButtons $remove onClick={resetForm}>
            Wyzeruj
        </SectionButtons>
    </Section>
);