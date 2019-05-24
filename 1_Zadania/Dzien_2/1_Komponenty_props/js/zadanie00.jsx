import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    function HelloOne(props) {
        return <h1>Hello, { props.name } { props.surname }</h1>
    }

    class HelloTwo extends React.Component {
        render() {
            return <h1>Hello, { this.props.name } { this.props.surname }</h1>
        }
    }

    class App extends React.Component {
        render() {
            return(
                <div>
                    <HelloOne name={ this.props.name } surname={ this.props.surname } />
                    <HelloTwo name={ this.props.name } surname={ this.props.surname } />
                </div>
            );
        }
    }

    ReactDOM.render(
        <App name="Jan" surname="Kowalski"/>,
        document.getElementById('app')
    );
});
