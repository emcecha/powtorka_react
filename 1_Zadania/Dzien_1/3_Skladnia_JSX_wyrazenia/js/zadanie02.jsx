import React from 'react';
import ReactDOM from 'react-dom';
import person from "./zadanie02.js";

console.log(person);

document.addEventListener('DOMContentLoaded', function(){

    ReactDOM.render(
        <div>
            <p>Imię: {person.name}</p>
            <p>Nazwisko: {person.surname}</p>
            <p>Tytuł: {person.title}</p>
            <p>Wiek: {person.age}</p>
        </div>,
        document.getElementById('app')
    );
});
