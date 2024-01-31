import { styled, css } from "styled-components";

export const Section = styled.div`
    margin-top: 15px;   
`
export const SectionButtons = styled.button`
    padding-top: 2px;
    font-size: 15px;
    color: white;
    border: none;
    font-weight: bold;
    width: 100%;
    max-width: 100%;
    height: 30px;

    ${({ $count }) => $count && css`
        background-color: teal;

        &:hover {
            background-color: hsla(180, 100%, 25%, 80%);
        }
    `};
    
    ${({ $remove }) => $remove && css`
        background-color: #b82e2e;

        &:hover {
            background-color: hsl(0, 91%, 59%)
        }
    ` };
`


