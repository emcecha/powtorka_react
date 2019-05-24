import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class GivePassword extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                logIn: false
            }
        }

        handleClick = () => {
            if (this.props.pwd === this.input.value) {
                this.setState({
                    logIn: true
                });
            }
        }

        render() {
            let logPanel;
            if (this.state.logIn) {
                return(
                    <div>
                        <h1>I'm in.</h1>
                    </div>
                );
            } else {
                return(
                    <div>
                        <input type="password" ref={ el => this.input = el } />
                        <button onClick={ this.handleClick }>Zaloguj</button>
                    </div>
                );
            }
        }
    }

    class App extends React.Component {
        render() {
            return <GivePassword pwd="hasło1" />
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
