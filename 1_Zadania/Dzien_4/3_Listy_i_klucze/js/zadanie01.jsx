import React from 'react';
import ReactDOM from 'react-dom';
import people from "./zadanie01.js"

document.addEventListener('DOMContentLoaded', function(){

    class PeopleList2 extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                list: this.props.people
            }
        }

        handleClick = () => {
            let reversedList = [...this.state.list];
            reversedList.reverse();
            this.setState({
                list: reversedList
            });
        }

        render() {
            const peopleList = this.state.list.map((el) => {
                return(
                    <li key={ el.email }>
                        { el.name }
                    </li>
                );
            });
            return(
                <div>
                    <ul>
                        { peopleList }
                    </ul>
                    <button onClick={ this.handleClick }>Reverse</button>
                </div>
            );
        }
    }

    class App extends React.Component {
        render() {
            return <PeopleList2 people={ people } />
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
