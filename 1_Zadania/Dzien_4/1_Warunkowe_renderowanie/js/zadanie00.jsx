import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class MyCheckbox extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                isYes: true
            }
        }

        handleClick = () => {
            if (this.state.isYes) {
                this.setState({
                    isYes: false
                });
            } else {
                this.setState({
                    isYes: true
                });
            }
        }

        render() {
            return(
                <button onClick={ this.handleClick }>
                    { this.state.isYes ? "TAK" : "NIE" }
                </button>
            );
        }
    }

    class App extends React.Component {
        render() {
            return <MyCheckbox />
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
