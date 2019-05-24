import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class NumberInfo extends React.Component {

        isPrime = (num) => {
            if (num <= 1) {
                return false;
            }
            if (num === 2) {
                return true;
            }
            for (let i = 2; i < num; i++) {
                if (num % i === 0) {
                    return false;
                } else {
                    return true;
                }
            }
        }

        isPowerOf2 = (num) => {
            return (num !== 0) && (num & (num - 1)) === 0;
        }

        render() {
            return(
                <h1>
                    { this.props.number + ": " }
                    { this.props.number % 2 === 0 ? "parzysta" : "nieparzysta" }
                    { this.isPrime(this.props.number) && ", liczba pierwsza" }
                    { this.isPowerOf2(this.props.number) && ", potęga liczby 2" }
                </h1>
            );
        }
    }

    class App extends React.Component {
        render() {
            return <NumberInfo number={ 16 } />
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
