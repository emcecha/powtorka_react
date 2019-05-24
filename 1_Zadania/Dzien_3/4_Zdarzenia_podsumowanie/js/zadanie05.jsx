import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class SpeedClickGame extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                time: this.props.time,
                score: 0
            }
        }

        handleClick = () => {
            let newTime = this.props.time - 50 * this.state.score;
            let newScore = this.state.score + 1;
            this.setState({
                time: newTime,
                score: newScore,
                disabled: false
            });
        }

        render() {
            return(
                <div>
                    <div>
                        <h1>Czas: { this.state.time }</h1>
                        <h2>Kliknięcia: { this.state.score }</h2>
                    </div>
                    <button onClick={ this.handleClick } disabled={ this.state.disabled }>
                        Click me!
                    </button>
                </div>
            );
        }

        componentDidMount() {
            this.intervalID = setInterval(() => {
                let newTime = this.state.time - 50;
                this.setState({
                    time: newTime
                },() => {
                    if (this.state.time <= 0) {
                        this.setState({
                            disabled: true
                        });
                        clearInterval(this.intervalID)
                    }
                });

            }, 50);
        }

        componentWillUnmount() {
            clearInterval(this.intervalID);
        }
    }

    class App extends React.Component {
        render() {
            return <SpeedClickGame time={ 2000 } />
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
