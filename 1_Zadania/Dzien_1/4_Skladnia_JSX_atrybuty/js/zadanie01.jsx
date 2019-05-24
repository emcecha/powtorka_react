import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    //Nie modyfikuj kodu powyżej
    let colorOne = "red";
    let colorTwo = "green";
    let colorThree = "blue";

    const redDiv = <div style={{height: "100px", backgroundColor: colorOne}}></div>;
    const greenDiv = <div style={{height: "100px", backgroundColor: colorTwo}}></div>;
    const blueDiv = <div style={{height: "100px", backgroundColor: colorThree}}></div>;

    //Nie modyfikuj kodu poniżej
    ReactDOM.render(
        <div>
            {redDiv}{greenDiv}{blueDiv}
        </div>,
        document.getElementById('app')
    );
});
