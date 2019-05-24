import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    function SumOne(props) {
        return <h1>Suma tablicy: { props.numbers.reduce((prev,next) => prev + next) }</h1>
    }

    class SumTwo extends React.Component {
        render() {
            return <h1>Suma tablicy: { this.props.numbers.reduce((prev,next) => prev + next) }</h1>
        }
    }

    class App extends React.Component {
        render() {
            return(
                <div>
                    <SumOne numbers={ this.props.numbers } />
                    <SumTwo numbers={ this.props.numbers } />
                </div>
            );
        }
    }

    ReactDOM.render(
        <App numbers={ [3,3,3] } />,
        document.getElementById('app')
    );
});
