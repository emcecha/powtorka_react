import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class NumberRandomInfo extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                number: 0
            }
        }

        render() {
            if (this.state.number > 3) {
                return <h1>{ this.state.number + " - większa od 3"}</h1>
            } else if (this.state.number < 3) {
                return <h1>{ this.state.number + " - mniejsza od 3"}</h1>
            } else {
                return <h1>{ this.state.number + " - równa 3"}</h1>
            }
        }

        componentDidMount() {
            this.intervalID = setInterval(() => {
                let newNumber = Math.ceil(Math.random() * 5 );
                this.setState({
                    number: newNumber
                });
            }, 1000);
        }
    }

    class App extends React.Component {
        render() {
            return(
                <NumberRandomInfo />
            );
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
