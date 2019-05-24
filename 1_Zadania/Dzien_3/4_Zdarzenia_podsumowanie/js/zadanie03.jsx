import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class CrazyDiv extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                top: "0px",
                left: "0px"
            }
        }

        getRandomPixels(min,max) {
            return Math.floor(Math.random() * (max + 1 - min) + min) + "px";
        }

        handleMouseEnter = () => {

            let pixTop = this.getRandomPixels(0,500);
            let pixLeft = this.getRandomPixels(0,500);
            
            this.setState({
                top: pixTop,
                left: pixLeft
            });
        }

        render() {
            let style = {
                position: "absolute",
                backgroundColor: "tomato",
                height: "100px",
                width: "100px",
                top: this.state.top,
                left: this.state.left
            }
            return(
                <div style= { style } onMouseEnter={ this.handleMouseEnter}>
                </div>
            );
        }
    }

    class App extends React.Component {
        render() {
            return(
                <div>
                    <CrazyDiv />
                </div>
            );
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
