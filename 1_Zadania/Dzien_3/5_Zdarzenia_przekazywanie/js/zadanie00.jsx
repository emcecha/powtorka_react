import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class ButtonToClick extends React.Component {

        handleClick = () => {
            if (typeof this.props.onClick === "function") {
                this.props.onClick();
            }
        }

        render() {
            return(
                <button onClick={ this.handleClick }>
                    Click me!
                </button>
            );
        }
    }

    class ButtonCounter extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                counter: 0
            }
        }

        handleClickedButton = () => {
            let newCounter = this.state.counter + 1
            this.setState({
                counter: newCounter
            });
        }

        render() {
            return(
                <div>
                    <h1>{ this.state.counter }</h1>
                    <ButtonToClick onClick={ this.handleClickedButton } />
                    <ButtonToClick onClick={ this.handleClickedButton } />
                </div>
            );
        }
    }

    class App extends React.Component {
        render() {
            return <ButtonCounter />
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
