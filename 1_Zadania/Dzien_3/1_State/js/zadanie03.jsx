import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class StrobeLight extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                color: "white",
                frequency: this.props.frequency
            }
        }
        render() {
            let style = {
                width: "500px",
                height: "100px",
                backgroundColor: this.state.color,
                margin: "100px auto"
            }
            return(
                <div style={ style }></div>
            );
        }
        componentDidMount() {
            this.intervalID = setInterval(() => {
                if (this.state.color === "white") {
                    this.setState({
                        color: this.props.color
                    });
                } else {

                    this.setState({
                        color: "white"
                    });
                }
            }, this.state.frequency);
        }
        componentWillUnmount() {
            clearInterval(this.intervalID)
        }
    }

    class App extends React.Component {
        render() {
            return(
                <div>
                    <StrobeLight color="tomato" frequency= { 100 } />
                </div>
            );
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
