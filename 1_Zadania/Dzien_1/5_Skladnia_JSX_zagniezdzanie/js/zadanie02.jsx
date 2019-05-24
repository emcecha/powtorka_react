import React from 'react';
import ReactDOM from 'react-dom';
import people from "./zadanie00_02.js"

document.addEventListener('DOMContentLoaded', function(){

    let peopleArr = people.map((el,index) => {
        return(
            <div className="person" key={ el.name + el.surname }>
                <img src={ el.avatar } />
                <div className="info">
                    <h1>{ `${el.title} ${el.name} ${el.surname}` }</h1>
                    <p>{ el.bio }</p>
                </div>
            </div>
        );
    });

    ReactDOM.render(
        <div>
            { peopleArr }
        </div>,
        document.getElementById('app')
    );
});
