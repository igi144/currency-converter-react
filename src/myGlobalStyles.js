import { createGlobalStyle } from "styled-components"
import background from "./background.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
      box-sizing: border-box;
    }

    *, *::after, ::before {
      box-sizing: inherit;
    }

    body {
    font-size: 18px;
    padding: 20px;
    max-width: 700px;
    margin: 0 auto;
    font-family: 'Lato', sans-serif;
    background-image: url("${background}");
    background-size: cover;
    };

    form {
    border-color: teal;
    background-color: white;
    margin: 10px auto;
    margin-top: 150px;
    }

    .form__header {
    font-size: 20px;
    text-align: center;
    padding: 10px
    }

    .form__label {
    padding-left: 20px;
    }

    .form__field {
    background-color: #0000000d;
    border: solid black;
    margin-left: 5px;
    height: 30px;
    width: 230px;
    padding-left: 5px;
    }

    .form__field--value {
    margin-left: 10px;
    }

    .form__label--amount {
    padding-left: 5px;
    }
`
