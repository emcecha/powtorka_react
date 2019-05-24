import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    //Funkcja generuje pseudolosowe liczby całkowite z zakresu 1-10.
    function genNumber(){
        return Math.round( Math.random() * 9 + 1 );
    }
    //Nie modyfikuj kodu powyżej

    let numA = genNumber();
    let numB = genNumber();
    let userAnswer = Number(prompt(`Ile to ${numA} + ${numB} ?`));

    const getAnswerElement = (a,b,answer) => {

        if (answer === a + b) {

            return <div style={{backgroundColor: "palegreen"}}>Odpowiedź poprawna</div>

        } else {

            return <div style={{backgroundColor: "tomato"}}>Odpowiedź błędna</div>
        }
    }

    ReactDOM.render(
        getAnswerElement(numA,numB,userAnswer),
        document.getElementById('app')
    );
});
