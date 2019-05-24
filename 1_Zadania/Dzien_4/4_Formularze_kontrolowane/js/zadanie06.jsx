import React from "react";
import ReactDOM from "react-dom";

document.addEventListener("DOMContentLoaded", () => {

    class ToDoList extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                input: "",
                items: []
            }
        }

        handleInputChange = (e) => {
            this.setState({
                input: e.target.value
            });
        }

        handleNewTask = () => {
            if (this.state.input === "") {
                return;
            }
            let newTask = {
                name: this.state.input,
                done: false
            }
            let newItems = [...this.state.items, newTask];
            this.setState({
                items: newItems,
                input: ""
            });
        }

        itemOnClick = (e) => {
            let updatedItems = [...this.state.items];
            if (updatedItems[e.target.dataset.id].done) {
                updatedItems[e.target.dataset.id].done = false;
            } else {
                updatedItems[e.target.dataset.id].done = true;
            }
            this.setState({
                items: updatedItems
            });
        }

        render() {
            return(
                <div className="toDoList">
                    <div className="header">
                        <h2>Lista rzeczy do zrobienia</h2>
                        <input
                            type="text"
                            value={ this.state.input }
                            onChange={ this.handleInputChange }
                        />
                        <button
                            className="addBtn"
                            onClick={ this.handleNewTask }
                        >
                            Dodaj
                        </button>
                    </div>
                    <ul>
                        { this.state.items.map((el,index) => {
                            return(
                                <li
                                    key={ index }
                                    data-id={ index }
                                    className={ el.done ? "checked" : ""}
                                    onClick={ this.itemOnClick }
                                    style={ {cursor: "pointer"} }
                                >
                                    { index + 1}. { el.name }
                                </li>
                            );
                        })}
                    </ul>
                </div>
            );
        }
    }

    class App extends React.Component {
        render() {
            return <ToDoList />
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById("app")
    );
});
