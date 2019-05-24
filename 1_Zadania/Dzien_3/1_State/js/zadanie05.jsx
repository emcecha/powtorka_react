import React from "react";
import ReactDOM from "react-dom";

document.addEventListener("DOMContentLoaded", () => {

    class LifeCyclesTester extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                text: this.props.text
            }
            console.log("konstruktor");
        }

        componentWillMount() {
            console.log("komponent będzie zamontowany");
        }

        render() {
            console.log("renderowanie");
            return <h1>State: { this.state.text }, props: { this.props.text }</h1>
        }

        componentDidMount() {
            this.timerID = setTimeout(() => {
                this.setState({
                    text: "Zaktualizowany state"
                });
            }, 5000);
            console.log("komponent został zamontowany");
        }

        componentWillReceiveProps() {
            console.log("komponent za chwilę otrzyma nowy zestaw props");
        }

        shouldComponentUpdate() {
            console.log("właśnie zmienił się stan wewnętrzny");
            return true;
        }

        componentWillUpdate() {
            console.log("komponent zostanie zaktualizowany");
        }

        componentDidUpdate() {
            console.log("komponent został zaktualizowany");
        }

        componentWillUnmount() {
            console.log("komponent będzie odmontowany")
            clearTimeout(this.timerID);
        }
    }


    class App extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                counter: 0
            }
        }

        componentDidMount() {
            this.intervalID = setInterval(() => {
                this.setState({
                    counter: this.state.counter + 1
                })
            }, 2000)
        }

        render() {
            return <LifeCyclesTester text={this.state.counter} />
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById("app")
    );
});
