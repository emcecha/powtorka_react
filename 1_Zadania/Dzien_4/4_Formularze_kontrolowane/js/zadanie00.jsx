import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class HelloName extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                name: ""
            }
        }

        handleNameChange = (e) => {
            this.setState({
                name: e.target.value
            });
        }

        render() {
            return(
                <div>
                    <input
                        type="text"
                        value={ this.state.name }
                        onChange={ this.handleNameChange }
                    />
                    <h1>Hello, { this.state.name }</h1>
                </div>
            );
        }
    }

    class App extends React.Component {
        render() {
            return <HelloName />
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
