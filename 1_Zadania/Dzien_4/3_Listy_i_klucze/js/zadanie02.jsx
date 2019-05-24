import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class Invites extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                list: []
            }
        }

        handleClick = () => {
            let newPerson = prompt("Kogo chcesz dodać do listy?")
            console.log(newPerson);
            if (newPerson === "") {return;}
            if (newPerson === null) {return;}
            if (this.state.list.indexOf(newPerson) > -1) {return;}
            let newList = [newPerson, ...this.state.list];
            console.log(newList);
            this.setState({
                list: newList
            });
        }

        render() {
            return(
                <div>
                    <ul>
                        { this.state.list.map((el) => {
                            return <li key={ el }>{ el }</li>
                        }) }
                    </ul>
                    <button onClick={ this.handleClick }>
                        Nowy
                    </button>
                </div>
            );
        }
    }

    class App extends React.Component {
        render() {
            return <Invites />
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
