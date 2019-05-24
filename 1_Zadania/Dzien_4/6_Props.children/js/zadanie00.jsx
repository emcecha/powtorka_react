import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class GrandchildComponent extends React.Component {
        render() {
            return(
                <div>
                    <h3>Jestem wnukiem</h3>
                </div>
            );
        }
    }

    class ChildComponent extends React.Component {
        render() {
            return(
                <div>
                    <h2>Jestem dzieckiem</h2>
                    { this.props.children }
                </div>
            );
        }
    }

    class ParentComponent extends React.Component {
        render() {
            return(
                <div>
                    <h1>Jestem rodzicem</h1>
                    { this.props.children }
                </div>
            );
        }
    }

    class App extends React.Component {
        render() {
            return(
                <ParentComponent>
                    <ChildComponent>
                        <GrandchildComponent />
                    </ChildComponent>
                </ParentComponent>
            );
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
