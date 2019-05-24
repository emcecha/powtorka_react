import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    function LikeBoxOne() {
        return(
            <div>
                <div>123 likes</div>
                <button type="button">Like!</button>
            </div>
        );
    }

    class LikeBoxTwo extends React.Component {
        render() {
            return(
                <div>
                    <div>123 likes</div>
                    <button type="button">Like!</button>
                </div>
            );
        }
    }

    class App extends React.Component {
        render() {
            return(
                <div>
                    <LikeBoxOne />
                    <LikeBoxTwo />
                </div>
            );
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
