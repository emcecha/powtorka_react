import React from 'react';
import ReactDOM from 'react-dom';
import shopping from "./zadanie02.js"

document.addEventListener('DOMContentLoaded', function(){

    class ReceiptHeader extends React.Component {
        render() {
            return(
                <thead>
                    <tr>
                        <th>Nazwa</th>
                        <th>Cena / 1</th>
                        <th>Ilość</th>
                        <th>Łączna cena</th>
                    </tr>
                </thead>
            );
        }
    }

    class ReceiptItem extends React.Component {
        render() {
            return(
                <tr>
                    <td>{ this.props.item.name }</td>
                    <td>{ this.props.item.price }</td>
                    <td>{ this.props.item.count }</td>
                    <td>{ this.props.item.price * this.props.item.count }</td>
                </tr>
            );
        }
    }

    class ReceiptItems extends React.Component {
        render() {
            let items = this.props.items.map((el,index) => {
                return <ReceiptItem key={ index } item={ el } />
            });
            return(
                <tbody>
                    { items }
                </tbody>
            );
        }
    }

    class ReceiptFooter extends React.Component {
        render() {
            const sum = this.props.items.map((el) => {
                return el.price * el.count;
            }).reduce((prev,curr) => {
                return prev + curr;
            })
            return(
                <tfoot>
                    <tr>
                        <td>RAZEM</td>
                        <td> - </td>
                        <td> - </td>
                        <td>{ sum }</td>
                    </tr>
                </tfoot>
            );
        }
    }

    class Receipt extends React.Component {
        render() {
            return(
                <table>
                    <ReceiptHeader />
                    <ReceiptItems items={ this.props.items } />
                    <ReceiptFooter items={ this.props.items } />
                </table>
            );
        }
    }

    class App extends React.Component {
        render() {
            return <Receipt items={ shopping } />
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
