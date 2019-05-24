import React from 'react';
import ReactDOM from 'react-dom';
import animals from "./zadanie05.js"
console.log(animals);

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <div>
            <p>ilość zwierząt: {animals.length}</p>
            <p>zwierzęta: {animals.join(", ")}</p>
        </div>,
        document.getElementById('app')
    );
});
