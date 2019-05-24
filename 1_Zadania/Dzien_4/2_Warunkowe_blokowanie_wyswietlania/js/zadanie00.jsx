import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class SecretStuff extends React.Component {
        render() {
            if (this.props.pwd === this.props.correctPwd) {
                return <div>{ this.props.secret }</div>
            } else {
                return null;
            }
        }
    }

    class App extends React.Component {
        render() {
            return <SecretStuff pwd="1112" correctPwd="111" secret="bardzo tajny sekret" />
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
