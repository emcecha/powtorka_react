import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class MathQuestionGame extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                operation: "",
                result: 0,
                answerArr: [],
                disabled: false,
                time: 10
            }
        }

        getOperationResult(a,b,sign) {
            if (sign === "+") {return a + b}
            if (sign === "-") {return a - b}
            if (sign === "*") {return a * b}
            if (sign === "/") {return a / b}
        }

        getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        }

        getRandomSign() {
            let signs = ["+","-","*","/"];
            return signs[Math.floor(Math.random()*signs.length)];
        }

        shuffleArr(a) {
            for (let i = a.length; i; i--) {
                let j = Math.floor(Math.random() * i);
                [a[i - 1], a[j]] = [a[j], a[i - 1]];
            }
            return a;
        }

        handleClick = (e) => {
            let answer = Number(e.target.innerText);
            if (answer === this.state.result) {
                this.setState({
                    operation: "Gratulacje!",
                    disabled: true
                });
            } else {
                this.setState({
                    operation: "Błędna odpowiedź :(",
                    disabled: true
                });
            }
            clearInterval(this.intervalID);
        }

        render() {
            return(
                <div>
                    <h1>
                        { this.state.operation }
                    </h1>
                    <div>
                        { this.state.answerArr.map((el,index) => {
                            return(
                                <button key={ el } onClick={ this.handleClick } disabled={ this.state.disabled }>
                                    { el }
                                </button>
                            );
                        }) }
                    </div>
                    <h2>{ this.state.time } s</h2>
                </div>
            );
        }

        componentDidMount() {

            let numA = this.getRandomNumber(1,10);
            let numB = this.getRandomNumber(1,10);
            let sign = this.getRandomSign();
            let result = this.getOperationResult(numA,numB,sign);
            let operation = `${numA} ${sign} ${numB} = ?`

            this.setState({
                operation: operation,
                result: result
            }, () => {
                let answerArr = [];

                for (var i = 0; i < 3; i++) {

                    let num;

                    if (sign === "*") {
                        num = this.getRandomNumber(1,100);
                    } else {
                        num = this.getRandomNumber(1,20);
                    }

                    if (num === this.state.result ||
                        answerArr.indexOf(num) > -1) {
                        i = i - 1;
                    } else {
                        answerArr[i] = num;
                    }
                }

                answerArr.push(this.state.result);
                answerArr = this.shuffleArr(answerArr);

                this.setState({
                    answerArr: answerArr
                });
            });

            this.intervalID = setInterval(() => {
                let newTime = this.state.time - 1;
                this.setState({
                    time: newTime
                },() => {
                    if (this.state.time === 0) {
                        this.setState({
                            operation: "Czas minął!",
                            disabled: true
                        });
                        clearInterval(this.intervalID);
                    }
                });
            }, 1000);
        }

        componentWillUnmount() {
            clearInterval(this.intervalID)
        }
    }

    class App extends React.Component {
        render() {
            return <MathQuestionGame />
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
