import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class App extends React.Component {

        handleOnClick = () => {
            console.log("to kliknięcie");
        }

        handleOnMouseEnter = () => {
            console.log("na wjechanie");
        }

        handleOnMouseLeave = () => {
            console.log("na wyjazd");
        }

        render() {
            return(
                <button onClick={ this.handleOnClick } onMouseEnter={ this.handleOnMouseEnter } onMouseLeave={ this.handleOnMouseLeave }>
                    Taki tam div
                </button>
            );
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
