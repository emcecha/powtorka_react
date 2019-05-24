import React from "react";
import ReactDOM from "react-dom";

document.addEventListener("DOMContentLoaded", () => {

    class ShopItem extends React.Component {

        handleClick = () => {
            if (typeof this.props.onBuy === "function") {
                this.props.onBuy(this.props.title);
            }
        }

        render() {
            return(
                <div>
                    <h1>{ this.props.title }</h1>
                    <button onClick={ this.handleClick }>Kup</button>
                </div>
            );
        }
    }

    class Shop extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                items: ["skarpetki","koszula","pończochy","szorty"],
                list: []
            }
        }

        addItemToList = (title) => {
            let newList = [...this.state.list, title];
            this.setState({
                list: newList
            });
        }

        render() {
            return(
                <div>
                    { this.state.items.map((el) => <ShopItem key={ el } title={ el } onBuy={ this.addItemToList } />) }
                    <ul>
                        { this.state.list.map((el) => <li key={ "li" + el }>{ el }</li>) }
                    </ul>
                </div>
            );
        }
    }

    class App extends React.Component {
        render() {
            return <Shop />
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById("app")
    )
});
