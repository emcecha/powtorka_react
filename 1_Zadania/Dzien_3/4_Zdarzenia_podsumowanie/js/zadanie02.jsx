import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class MyDiv extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                height: "200px",
                color: "palegreen"
            }
        }

        handleMouseEnter = () => {
            this.setState({
                height: "400px",
                color: "lightblue"
            });
        }

        handleMouseLeave = () => {
            this.setState({
                height: "200px",
                color: "palegreen"
            });
        }

        render() {
            let style = {
                width: "500px",
                height: this.state.height,
                backgroundColor: this.state.color
            }
            return(
                <div style= { style } onMouseEnter={ this.handleMouseEnter } onMouseLeave={ this.handleMouseLeave }></div>
            );
        }
    }

    class App extends React.Component {
        render() {
            return(
                <div>
                    <MyDiv />
                </div>
            );
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
