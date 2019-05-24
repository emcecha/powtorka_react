import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    let messages = ["wpis 1","wpis 2","wpis 3"];

    // function ChatHeader(props) {
    //     return(
    //         <header>
    //             <h1>Chat prywatny</h1>
    //         </header>
    //     );
    // }
    //
    // function ChatMessage(props) {
    //     return <li>{ props.message }</li>
    // }
    //
    // function ChatMessages(props) {
    //     return(
    //         <div>
    //             <ul>
    //                 { props.messages.map((el,index) => {
    //                     return <ChatMessage key={ index } message={ el } />
    //                 }) }
    //             </ul>
    //         </div>
    //     );
    // }
    //
    // function NewChatMessage(props) {
    //     return(
    //         <footer>
    //             <input type="text"/>
    //             <button>Wyślij</button>
    //         </footer>
    //     );
    // }
    //
    // function Chat(props){
    //     return(
    //         <div className="chat">
    //             <ChatHeader />
    //             <ChatMessages messages= { props.messages } />
    //             <NewChatMessage />
    //         </div>
    //     );
    // }
    //
    // function App(props){
    //     return(
    //         <div>
    //             <Chat messages= { messages }/>
    //         </div>
    //     );
    // }

    class ChatHeader extends React.Component {
        render() {
            return(
                <header>
                    <h1>Chat prywatny</h1>
                </header>
            );
        }
    }

    class ChatMessage extends React.Component {
        render() {
            return <li>{ this.props.message }</li>
        }
    }

    class ChatMessages extends React.Component {
        render() {
            return(
                <div>
                    <ul>
                        { this.props.messages.map((el,index) => {
                            return(
                                <ChatMessage key={ index } message={ el } />
                            );
                        }) }
                    </ul>
                </div>
            );
        }
    }

    class NewChatMessage extends React.Component {
        render() {
            return(
                <footer>
                    <input type="text"/>
                    <button>Wyślij</button>
                </footer>
            );
        }
    }

    class Chat extends React.Component{
        render(){
            return(
                <div className="chat">
                    <ChatHeader />
                    <ChatMessages messages={ this.props.messages } />
                    <NewChatMessage />
                </div>
            );
        }
    }

    class App extends React.Component{
        render(){
            return <div>
                <Chat messages={ messages }/>
            </div>;
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
