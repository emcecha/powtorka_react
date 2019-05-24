import React from 'react';
import ReactDOM from 'react-dom';
import people from "./zadanie00_02.js"

document.addEventListener('DOMContentLoaded', function(){

    let person = people.map((el,index) => {
        return <div key={ el.name + el.surname }>{ index + 1 }. { el.name } { el.surname }</div>
    });

    ReactDOM.render(
        <div>
            { person }
        </div>,
        document.getElementById('app')
    );
});
