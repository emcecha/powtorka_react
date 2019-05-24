import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class TextTyper extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                currText: this.props.text[0],
                counter: 2,
                sign: 1
            }
        }

        render() {
            return <h1>{ this.state.currText }</h1>
        }

        componentDidMount() {

            if (this.props.reversed === true) {

                this.setState({
                    currText: this.props.text,
                    counter: -1,
                    sign: -1
                })
            }

            this.intervalId = setInterval(() => {

                this.setState({
                    currText: this.props.text.slice(0,this.state.counter),
                    counter: this.state.counter + this.state.sign
                });

                if (this.state.counter > this.props.text.length || this.state.currText.length === 0) {
                    console.log("git");
                    clearInterval(this.intervalId)
                }

            },1000);
        }
    }

    class App extends React.Component {
        render() {
            return(
                <div>
                    <TextTyper text="Witaj!" reversed={ true } />
                </div>
            );
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
