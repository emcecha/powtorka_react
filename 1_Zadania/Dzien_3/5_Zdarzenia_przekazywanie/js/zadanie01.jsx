import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class MyComponent extends React.Component {

        handleClick = (e) => {
            if (typeof this.props.onClick === "function") {
                this.props.onClick(e,"jakiś dowolny string")
            }
        }

        render() {
            return(
                <a href="#" onClick={ this.handleClick }>
                    Przycisk
                </a>
            );
        }
    }

    class App extends React.Component {

        handleClickButton = (e, text) => {
            e.preventDefault();
            console.log(e.target);
            console.log(text);
        }

        render() {
            return <MyComponent onClick={ this.handleClickButton } />
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
