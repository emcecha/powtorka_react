import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    let item = {
        header: {
            title: "piła mechaniczna",
            imgSrc: "./img/pila.jpg"
        },
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: "125.00 zł"
    }

    class ShopItemHeader extends React.Component {
        render() {
            return(
                <div>
                    <h1>{ this.props.header.title }</h1>
                    <img src={ this.props.header.imgSrc } />
                </div>
            );
        }
    }

    class ShopItemDescription extends React.Component {
        render() {
            return(
                <article>
                    <p>{ this.props.description }</p>
                </article>
            );
        }
    }

    class ShopItemPricing extends React.Component {
        render() {
            return(
                <div>
                    Cena: { this.props.price }
                    <button>Kup!</button>
                </div>
            );
        }
    }

    class ShopItem extends React.Component {
        render() {
            return(
                <div>
                    <ShopItemHeader header={ this.props.item.header }/>
                    <ShopItemDescription description={ this.props.item.description }/>
                    <ShopItemPricing price={ this.props.item.price } />
                </div>
            );
        }
    }

    class App extends React.Component {
        render() {
            return(
                <div>
                    <ShopItem item= { item }/>
                </div>
            );
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
