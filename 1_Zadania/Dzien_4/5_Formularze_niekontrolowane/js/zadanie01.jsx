import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class SumOne extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                numbers: [],
                numSum: 0
            }
        }

        handleClick = () => {
            if (this.input.value === "") {
                return;
            }
            let newNumbers = [...this.state.numbers, Number(this.input.value)];
            let newNumSum = newNumbers.reduce((prev,curr) => {
                return prev + curr;
            });
            this.setState({
                numbers: newNumbers,
                numSum: newNumSum
            });
        }

        render() {
            return(
                <div>
                    <input type="number" ref={ el => this.input = el } />
                    <button onClick={ this.handleClick }>Dodaj</button>
                    <ul>
                        { this.state.numbers.map((el,index) => {
                            return <li key={ index }>{ el }</li>
                        }) }
                    </ul>
                    <h1>Suma: { this.state.numSum }</h1>
                </div>
            );
        }
    }

    class SumTwo extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                input: "",
                numbers: [],
                numSum: 0
            }
        }

        handleClick = () => {
            if (this.state.input === "") {
                return;
            }
            let newNumbers = [...this.state.numbers, Number(this.state.input)];
            let newNumSum = newNumbers.reduce((prev,curr) => {
                return prev + curr;
            });
            this.setState({
                numbers: newNumbers,
                numSum: newNumSum
            });
        }

        handleInputChange = (e) => {
            this.setState({
                input: e.target.value
            });
        }

        render() {
            return(
                <div>
                    <input
                        type="number"
                        onChange={ this.handleInputChange }
                        value={ this.state.input }
                    />
                    <button onClick={ this.handleClick }>Dodaj</button>
                    <ul>
                        { this.state.numbers.map((el,index) => {
                            return <li key={ index }>{ el }</li>
                        }) }
                    </ul>
                    <h1>Suma: { this.state.numSum }</h1>
                </div>
            );
        }
    }

    class App extends React.Component {
        render() {
            return(
                <div>
                    <SumOne />
                    <SumTwo />
                </div>
            );
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
