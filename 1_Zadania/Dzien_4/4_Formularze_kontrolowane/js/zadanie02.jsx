import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class InteractiveDiv extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                width: 0
            }
        }

        handleChange = (e) => {
            this.setState({
                width: e.target.value
            });
        }

        render() {
            let style = {
                height: "100px",
                backgroundColor: "tomato",
                width: this.state.width + "px"
            }
            return(
                <div>
                    <input
                        type="number"
                        value={ this.state.width }
                        onChange={ this.handleChange }
                    />
                    <div style={ style }></div>
                </div>
            );
        }
    }

    class App extends React.Component {
        render() {
            return <InteractiveDiv />
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
