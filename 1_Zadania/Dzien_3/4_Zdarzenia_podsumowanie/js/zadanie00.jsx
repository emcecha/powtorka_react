import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class App extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                text: "Klik!"
            }
        }

        handleClickOne = () => {
            console.log("Pierwszy przycisk kliknięty");
        }

        handleClickTwo = () => {
            this.setState({
                text: "Click!"
            });
        }

        handleClickThree = (e) => {
            e.target.style.width = "300px";
        }

        render() {
            return(
                <div>
                    <button onClick={ this.handleClickOne }>
                        { this.state.text }
                    </button>
                    <button onClick={ this.handleClickTwo }>
                        { this.state.text }
                    </button>
                    <button onClick={ this.handleClickThree }>
                        { this.state.text }
                    </button>
                </div>
            );
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
