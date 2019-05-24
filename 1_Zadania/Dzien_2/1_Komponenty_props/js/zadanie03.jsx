import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    function LikeBoxOne(props) {
        return (
            <div>
                <div>{ props.likes }</div>
                <button>Like!</button>
            </div>
        );
    }

    class LikeBoxTwo extends React.Component {
        render() {
            return(
                <div>
                    <div>{ this.props.likes }</div>
                    <button>Like!</button>
                </div>
            );
        }
    }

    class App extends React.Component {
        render() {
            return(
                <div>
                    <LikeBoxOne likes={ this.props.likes } />
                    <LikeBoxTwo likes={ this.props.likes } />
                </div>
            );
        }
    }

    ReactDOM.render(
        <App likes={ 48 }/>,
        document.getElementById('app')
    );
});
