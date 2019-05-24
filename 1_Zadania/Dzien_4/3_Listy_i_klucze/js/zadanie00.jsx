import React from 'react';
import ReactDOM from 'react-dom';
import people from "./zadanie00.js";

document.addEventListener('DOMContentLoaded', function(){

    class PeopleList extends React.Component {
        render() {
            const people = this.props.people.map((el) => {
                return <li key={ el.pesel }>{ el.name }</li>
            });
            return(
                <ul>
                    { people }
                </ul>
            );
        }
    }

    class App extends React.Component {
        render() {
            return <PeopleList people= { people } />
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
