import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class HelloWorld extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                text: "Hello World!"
            }
            console.log("konstruktor");
        }
        render() {
            console.log("renderowanie");
            return <h1>{ this.state.text }</h1>
        }
        componentDidMount() {
            console.log("zamontowanie");
            this.timeoutId = setTimeout(() => {
                this.setState({
                    text: "Hi, Everyone!"
                });
            }, 5000);
        }
        componentWillUnmount() {
            console.log("będzie odmontowany");
            clearTimeout(this.timeoutId);
        }
    }

    class App extends React.Component {
        render() {
            return(
                <div>
                    <HelloWorld />
                </div>
            );
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
