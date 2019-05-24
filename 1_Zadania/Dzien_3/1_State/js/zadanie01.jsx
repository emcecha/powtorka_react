import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class TextTyper extends React.Component {
        
        constructor(props) {
            super(props);
            this.state = {
                currText: this.props.text[0],
                counter: 2
            }
        }

        render() {
            return <h1>{ this.state.currText }</h1>
        }

        componentDidMount() {

            this.intervalId = setInterval(() => {

                this.setState({
                    currText: this.props.text.slice(0,this.state.counter),
                    counter: this.state.counter + 1
                });

                if (this.state.counter > this.props.text.length) {
                    clearInterval(this.intervalId)
                }

            },1000);
        }
    }

    class App extends React.Component {
        render() {
            return(
                <div>
                    <TextTyper text="Witaj!" />
                </div>
            );
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
