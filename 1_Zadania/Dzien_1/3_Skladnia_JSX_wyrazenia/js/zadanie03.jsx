import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    let numA = Number(prompt("Podaj pierwszą liczbę:"));
    let numB = Number(prompt("Podaj drugą liczbę:"));
    let sign = prompt("Jakie działanie wykonać:");

    const calc = (numA,numB,sign) => {
        if (sign === "+") {return <h1>{numA} {sign} {numB} = {numA + numB}</h1>;}
        if (sign === "-") {return <h2>{numA} {sign} {numB} = {numA - numB}</h2>;}
        if (sign === "*") {return <h3>{numA} {sign} {numB} = {numA * numB}</h3>;}
        if (sign === "/") {return <h4>{numA} {sign} {numB} = {numA / numB}</h4>;}
    }

    ReactDOM.render(
        <div>
            {calc(numA,numB,sign)}
        </div>,
        document.getElementById('app')
    );
});
