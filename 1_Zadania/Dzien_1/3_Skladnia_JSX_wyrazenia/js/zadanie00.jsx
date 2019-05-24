import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    let numA = Number(prompt("Podaj liczbę a:"));
    let numB = Number(prompt("Podaj liczbę b:"));

    ReactDOM.render(
        <div>{numA + numB}</div>,
        document.getElementById('app')
    );
});
