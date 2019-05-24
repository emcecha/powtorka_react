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
            return <h1>{ this.state.text }</h1>
        }
        componentDidMount() {
            this.timerID = setTimeout(() => {
                this.setState({
                    text: "Zaktualizowany state"
                });
            }, 5000);
            console.log("komponent został zamontowany");
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
            console.log("komponent będzie odmontowany");
        }
    }

    ReactDOM.render(
        <LifeCyclesTester text="jakiś dowolny tekst" />,
        document.getElementById("app")
    );
});
