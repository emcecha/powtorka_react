import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class MixedData extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                input: "",
                select: "Banany"
            }
        }

        handleInput = (e) => {
            this.setState({
                input: e.target.value
            });
        }

        handleSelect = (e) => {
            this.setState({
                select: e.target.value
            });
        }

        render() {
            return(
                <div>
                    <input
                        type="text"
                        onChange={ this.handleInput }
                        value={ this.state.input }
                    />
                    <select
                        value={ this.state.select }
                        onChange={ this.handleSelect }
                    >
                        <option value="Banany">Banany</option>
                        <option value="Ananasy">Ananasy</option>
                        <option value="Pomarańcze">Pomarańcze</option>
                    </select>
                </div>
            );
        }
    }

    class App extends React.Component {
        render() {
            return <MixedData />
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
