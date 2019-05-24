import React from "react";
import ReactDOM from "react-dom";

document.addEventListener("DOMContentLoaded", () => {

    class MathAnswersGame extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                numA: 0,
                numB: 0,
                time: 3,
                result: 0,
                answer: "",
                score: 0,
                disabled: false,
            }
        }

        getRandomNumber(min,max) {
            return Math.floor(Math.random() * max + min);
        }

        startNewQuestionCycle() {
            let a = this.getRandomNumber(1,10);
            let b = this.getRandomNumber(1,10);
            this.setState({
                numA: a,
                numB: b,
                result: a + b
            });
            this.intervalID = setInterval(() => {
                this.setState({
                    time: this.state.time - 1
                }, () => {
                    if (this.state.time === 0) {
                        console.log(this.state.answer);
                        console.log(this.state.result);
                        if (this.state.answer === this.state.result) {
                            clearInterval(this.intervalID);
                            this.setState({
                                score: this.state.score + 1,
                                answer: "",
                                time: 3
                            });
                            this.startNewQuestionCycle();
                        } else {
                            clearInterval(this.intervalID);
                            this.setState({
                                time: "Koniec gry!",
                                disabled: true,
                            });
                        }
                    }
                });
            }, 1000);
        }

        handleChange = (e) => {
            this.setState({
                answer: Number(e.target.value)
            });
        }

        render() {
            return(
                <div>
                    <h1>{ this.state.numA } + { this.state.numB } = ?</h1>
                    <div>
                        <input
                            type="number"
                            value={ this.state.answer }
                            onChange= { this.handleChange }
                            disabled={ this.state.disabled }
                        />
                    </div>
                    <h2>{ this.state.time }</h2>
                    <h3>Punkty: { this.state.score }</h3>
                </div>
            );
        }

        componentDidMount() {
            this.startNewQuestionCycle()
        }

        componentWillUnmount() {
            clearInterval(this.intervalID);
        }
    }



    class App extends React.Component {
        render() {
            return <MathAnswersGame />
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById("app")
    );
});
