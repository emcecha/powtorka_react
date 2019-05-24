import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    const getDiv = () => {

        let userColor = prompt("Wybierz kolor: green, red, blue");

        if (["red","green","blue"].indexOf(userColor) > -1) {

            let style = {
                width: "100px",
                height: "100px",
                border: `5px solid ${userColor}`
            }

            return <div style={style}></div>

        } else {

            return <div>Nieprawidłowy kolor</div>
        }
    }

    ReactDOM.render(
        <div>
            {getDiv()}
        </div>,
        document.getElementById('app')
    );
});
