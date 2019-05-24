import React from 'react';
import ReactDOM from 'react-dom';
import shopping from "./zadanie02.js"

document.addEventListener('DOMContentLoaded', function(){

    class Receipt extends React.Component {
        render() {
            return(
                <table>
                    <thead>
                        <tr>
                            <th>Nazwa</th>
                            <th>Cena / 1</th>
                            <th>Ilość</th>
                            <th>Łączna cena</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.items.map((el,index) => {
                            return(
                                <tr key={ index + el.name }>
                                    <td>{ el.name }</td>
                                    <td>{ el.price }</td>
                                    <td>{ el.count }</td>
                                    <td>{ el.price * el.count }</td>
                                </tr>
                            );
                        }) }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>RAZEM</td>
                            <td> - </td>
                            <td> - </td>
                            <td>{ this.props.items.map((el) => {
                                return el.price * el.count;
                            }).reduce((prev,curr) => {
                                return prev + curr;
                            }) }</td>
                        </tr>
                    </tfoot>
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
