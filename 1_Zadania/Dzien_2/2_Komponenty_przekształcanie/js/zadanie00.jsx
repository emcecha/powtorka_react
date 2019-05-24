import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class AddNumbers extends React.Component {
        render() {
            const sum = this.props.numberA + this.props.numberB;
            return <div>{ sum }</div>
        }
    }

    class App extends React.Component {
        render() {
            return(
                <div>
                    <AddNumbers numberA={ 2 } numberB={ 3 } />
                </div>
            );
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
