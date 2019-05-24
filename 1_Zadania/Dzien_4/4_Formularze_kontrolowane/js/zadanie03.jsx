import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class SelectOrType extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                select: "BMW",
                others: "Inne",
                othersInfo: "none",
                input: ""
            }
        }

        handleSelectChange = (e) => {
            let choice = e.target.value;
            this.setState({
                select: choice
            }, (e) => {
                if (this.props.items.indexOf(choice) < 0) {
                    this.setState({
                        othersInfo: "initial"
                    });
                } else {
                    this.setState({
                        othersInfo: "none"
                    });
                }
            });
        }

        handleInputChange = (e) => {
            this.setState({
                input: e.target.value
            });
        }

        handleButton = () => {
            this.setState({
                select: this.state.input,
                others: this.state.input
            },() => {
                this.setState({
                    input: "",
                    othersInfo: "none"
                });
            });
        }

        render() {
            return(
                <div>
                    <select
                        value={ this.state.select }
                        onChange={ this.handleSelectChange}
                    >
                        { this.props.items.map((el) => {
                            return(
                                <option key={ el } value={ el }>{ el }</option>
                            );
                        }) }
                        <option
                            key={ this.state.others }
                            value={ this.state.others }
                        >
                            { this.state.others }
                        </option>
                    </select>
                    <input
                        style={ {display: this.state.othersInfo} }
                        type="text"
                        value={ this.state.input }
                        onChange={ this.handleInputChange }
                    />
                    <button
                        style={ {display: this.state.othersInfo} }
                        type="button"
                        onClick={ this.handleButton }
                    >
                        Zatwierdź
                    </button>
                </div>
            );
        }
    }

    class App extends React.Component {
        render() {
            return <SelectOrType items={ ['BMW','Jaguar','Porshe'] } />
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
