import React from 'react';
import ReactDOM from 'react-dom';
import fakeAPI from "./zadanie01.js"

document.addEventListener('DOMContentLoaded', function(){

    class AccountData extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                data: false
            }
        }

        loadAPIdata(response) {
            this.setState({
                data: response
            });
        }

        render() {
            console.log(this.state);
            if (this.state.data === false) {
                return null;
            } else {
                return(
                    <table>
                        <thead>
                            <th>DAY</th>
                            <th>BALANCE</th>
                            <th>CHANGE</th>
                        </thead>
                        <tbody>
                            { this.state.data.map((el,index) => {
                                return(
                                    <tr key={ index + el.day }>
                                        <td>{ this.state.day }</td>
                                        <td>{ this.state.balance }</td>
                                        <td>{ this.state.change }</td>
                                    </tr>
                                );
                            }) }
                        </tbody>
                    </table>
                );
            }
        }

        componentDidMount() {
            fakeAPI.load().then(response);
        }
    }

    class App extends React.Component {
        render() {
            return <AccountData />
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
