import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class LifeCyclesTester extends React.Component {
        constructor(props) {
            super(props);
            console.log("konstruktor");
        }
        componentWillMount() {
            console.log("komponent będzie zamontowany");
        }
        render() {
            console.log("renderowanie");
            return <div>render</div>
        }
        componentDidMount() {
            console.log("komponent został zamontowany");
        }
        componentWillUnmount() {
            console.log("komponent będzie odmontowany");
        }
    }

    ReactDOM.render(
        <LifeCyclesTester />,
        document.getElementById('app')
    );
});
