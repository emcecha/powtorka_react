import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    function AddNumbersOne(props) {
        return <h1>Suma: { props.numberA + props.numberB }</h1>
    }

    class AddNumbersTwo extends React.Component {
        render() {
            return(
                <h1>Suma: { this.props.numberA + this.props.numberB }</h1>
            );
        }
    }

    class App extends React.Component {
        render() {
            return(
                <div>
                    <AddNumbersOne numberA={ this.props.numberA } numberB={ this.props.numberB } />
                    <AddNumbersTwo numberA={ this.props.numberA } numberB={ this.props.numberB } />
                </div>
            );
        }
    }

    ReactDOM.render(
        <App numberA={ 10 } numberB={ 5 }/>,
        document.getElementById('app')
    );
});
