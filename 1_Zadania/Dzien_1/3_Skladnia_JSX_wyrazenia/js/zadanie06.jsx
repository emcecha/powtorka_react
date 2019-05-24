import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    let userAge = Number(prompt("Ile masz lat?"));

    ReactDOM.render(
        <div>
            { userAge >= 18 ? <div id="adult">old</div> : <div id="youth">young</div> }
        </div>,
        document.getElementById('app')
    );
});
