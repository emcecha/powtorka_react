import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class StrobeLight extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                color: "white",
                frequency: this.props.frequency,
                onOff: this.props.onOff
            }
        }

        render() {
            let style = {
                width: "500px",
                height: "100px",
                backgroundColor: this.state.color,
                margin: "20px auto"
            }
            return(
                <div style={ style }></div>
            );
        }

        componentDidMount() {
            this.intervalID = setInterval(() => {

                this.setState({
                    onOff: this.props.onOff
                }, () => {

                    if (this.state.onOff === true) {

                        if (this.state.color === "white") {
                            this.setState({
                                color: this.props.color
                            });
                        } else {
                            this.setState({
                                color: "white"
                            });
                        }

                    } else {
                        clearInterval(this.intervalID);
                    }

                });

            }, this.state.frequency);
        }

        componentWillUnmount() {
            clearInterval(this.intervalID)
        }
    }

    class StrobeControl extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                onOff: true
            }
        }

        render() {
            return(
                <div>
                    <StrobeLight color="palegreen" frequency={ 100 } onOff={ this.state.onOff } />
                    <StrobeLight color="yellow" frequency={ 50 } onOff={ this.state.onOff } />
                    <StrobeLight color="orange" frequency={ 80 } onOff={ this.state.onOff } />
                    <StrobeLight color="tomato" frequency={ 120 } onOff={ this.state.onOff } />
                    <StrobeLight color="lightblue" frequency={ 60 } onOff={ this.state.onOff } />
                </div>
            );
        }

        componentDidMount() {
            this.timerID = setTimeout(() => {
                this.setState({
                    onOff: false
                });
            }, 5000);
        }

        componentWillUnmount() {
            clearTimeout(timerID);
        }
    }

    class App extends React.Component {

        render() {
            return(
                <div>
                    <StrobeControl />
                </div>
            );
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
