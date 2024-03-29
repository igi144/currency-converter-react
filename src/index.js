import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from "./myGlobalStyles";
import { AlternativeAppView } from "./AlternativeAppView";
import { LoadingAppView } from './LoadingAppView';

const promise = fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_kbeBm4WrGxVb1nzxWeQ9hNihARpTmeimq1jC8DIG&currencies=EUR%2CUSD%2CCAD&base_currency=PLN")
const root = ReactDOM.createRoot(document.getElementById('root'));

promise.then(response => {
  try {
    if (!response.ok) {
      root.render(
        <React.StrictMode>
          <GlobalStyle />
          <AlternativeAppView />
        </React.StrictMode>
      )
    }
    else {
      root.render(
        <React.StrictMode>
          <GlobalStyle />
          <LoadingAppView />
        </React.StrictMode>
      )
      setTimeout(() => {
        root.render(
          <React.StrictMode>
            <GlobalStyle />
            <App />
          </React.StrictMode>
        )
      }, 1000)
    }
  }
  catch (error) {
    console.error(error)
  }
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

