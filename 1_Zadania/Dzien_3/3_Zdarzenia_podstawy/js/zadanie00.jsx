import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class App extends React.Component {

        handleClickOne(el) {
            console.log(this);
            console.log(el.target);
            console.log("Działa One");
        }

        handleClickTwo = (el) => {
            console.log(this);
            console.log(el.target);
            console.log("Działa Two");
        }

        render() {
            return(
                <div>
                    <button onClick={ (el) => this.handleClickOne(el) }>KlikOne</button>
                    <button onClick={ this.handleClickTwo }>KlikTwo</button>
                </div>
            );
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
