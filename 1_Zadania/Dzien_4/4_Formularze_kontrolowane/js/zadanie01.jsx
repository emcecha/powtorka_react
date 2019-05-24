import React from "react";
import ReactDOM from "react-dom";

document.addEventListener("DOMContentLoaded", () => {

    class AddTwoNumbers extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                numA: "",
                numB: ""
            }
        }

        handleChange = (e) => {
            if (e.target.name === "numA") {
                this.setState({
                    numA: e.target.value
                });
            }
            if (e.target.name === "numB") {
                this.setState({
                    numB: e.target.value
                });
            }
        }

        getInputSum() {
            let sum = Number(this.state.numA) + Number(this.state.numB);
            return sum;
        }

        render() {
            return(
                <div>
                    <input
                        type="text"
                        name="numA"
                        value={ this.state.numA }
                        onChange={ this.handleChange }
                    />
                    <input
                        type="text"
                        name="numB"
                        value={ this.state.numB }
                        onChange={ this.handleChange }
                    />
                    <h1>{ this.getInputSum() }</h1>
                </div>
            );
        }
    }

    class App extends React.Component {
        render() {
            return <AddTwoNumbers />
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById("app")
    );
});
