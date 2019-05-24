import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class TextField extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                select: "Jeden"
            }
        }

        handleSelectChange = (e) => {
            this.setState({
                select: e.target.value
            });
        }

        render() {
            return(
                <div>
                    <p>{ this.state.select }</p>
                    <select
                        value={ this.state.select }
                        onChange= { this.handleSelectChange }
                    >
                        <option value="Jeden">Jeden</option>
                        <option value="Dwa">Dwa</option>
                        <option value="Trzy">Trzy</option>
                    </select>
                    <span>{ this.state.select.length }</span>
                </div>
            );
        }
    }

    class App extends React.Component {
        render() {
            return <TextField />
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
