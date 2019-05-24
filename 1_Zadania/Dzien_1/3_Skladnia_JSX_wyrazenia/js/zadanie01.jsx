import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    let birthYear = Number(prompt("W jakim roku się urodziłeś:"));
    let actualYear = new Date().getFullYear();

    ReactDOM.render(
        <h1>{actualYear - birthYear}</h1>,
        document.getElementById('app')
    );
});
