import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Javascript Vanilla
// let elemento = document.createElement('p');
// elemento.innerHTML = 'Soy gaston de Córdoba';
// let contenedor = document.getElementById('root');
// contenedor.appendChild(elemento)

// let elemento = <p>Hola soy Gastón desde JSX</p>
// let container = document.getElementById('root')
// ReactDOM.render(elemento, container);