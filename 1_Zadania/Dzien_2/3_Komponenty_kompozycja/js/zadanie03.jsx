import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    // function Button(props) {
    //     return <button>{ props.text }</button>
    // }
    //
    // function Message(props) {
    //     return(
    //         <div>
    //             <Button text="Tak" />
    //             <Button text="Nie" />
    //             <p>{ props.messageText }</p>
    //         </div>
    //     );
    // }
    //
    // function App(props) {
    //     return(
    //         <div>
    //             <Message messageText="To jest pierwszy tekst" />
    //             <Message messageText="No a to jest drugi tekst" />
    //             <Button text="Zaloguj" />
    //             <Button text="Zarejestruj" />
    //         </div>
    //     );
    // }

    class Button extends React.Component {
        render() {
            return <button>{ this.props.text }</button>
        }
    }

    class Message extends React.Component {
        render() {
            return(
                <div>
                    <Button text="Tak" />
                    <Button text="Nie" />
                    <p>{ this.props.messageText }</p>
                </div>
            );
        }
    }

    class App extends React.Component {
        render() {
            return(
                <div>
                    <Message messageText="To jest pierwszy komunikat" />
                    <Message messageText="A to jest drugi komunikat" />
                    <Button text="Zaloguj" />
                    <Button text="Zarejestruj" />
                </div>
            );
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
