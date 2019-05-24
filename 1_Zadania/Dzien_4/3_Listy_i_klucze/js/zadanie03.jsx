import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class Switch extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                disabled: []
            }
        }

        handleClick = (e,key) => {
            console.log(key);
            let newDisabled = [...this.state.disabled, key]
            console.log(newDisabled);
            this.setState({
                disabled: newDisabled
            });
        }

        render() {
            let items = [];
            for (let i = 0; i < this.props.count; i++) {
                items[i] = <li key={ "li" + i } id={ "li" + 0 }>
                    <button key={ "btn" + i } id={ "btn" + i } onClick={ e =>  this.handleClick(e,items[i].key) } disabled={ this.state.disabled.indexOf("li" + i) > -1 ? true : false }>
                        { i + 1 }
                    </button>
                </li>
            }

            return(
                <ul>
                    { items }
                </ul>
            );
        }
    }

    class App extends React.Component {
        render() {
            return <Switch count= { 3 } />
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
