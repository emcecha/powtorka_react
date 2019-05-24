import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class Bulb extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                color: "white",
                text: "On"
            }
        }

        handleClick = () => {
            if (this.state.color === "white") {
                this.setState({
                    color: "yellow",
                    text: "Off"
                });
            } else {
                this.setState({
                    color: "white",
                    text: "On"
                });
            }
        }

        render() {
            let style = {
                height: "100px",
                width: "100px",
                backgroundColor: this.state.color
            }
            return(
                <div style={ style }>
                    <button onClick={ this.handleClick }>
                        { this.state.text }
                    </button>
                </div>
            );
        }
    }

    class App extends React.Component {
        render() {
            return(
                <div>
                    <Bulb />
                </div>
            );
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
