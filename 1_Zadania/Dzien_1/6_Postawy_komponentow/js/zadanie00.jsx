import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    function BrowserOne() {
        return(
            <form>
                <input type="text" />
                <button type="button">Search</button>
            </form>
        );
    }

    class BrowserTwo extends React.Component {
        render() {
            return(
                <form>
                    <input type="text" />
                    <button type="button">Search</button>
                </form>
            );
        }
    }

    class App extends React.Component {
        render() {
            return(
                <div>
                    <BrowserOne />
                    <BrowserTwo />
                </div>
            );
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
