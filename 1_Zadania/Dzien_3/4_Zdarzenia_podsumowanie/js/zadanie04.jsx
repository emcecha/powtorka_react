import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class MobileMenu extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                iconDisplay: "block",
                menuDisplay: "none"
            }
        }

        showMenu = () => {
            this.setState({
                iconDisplay: "none",
                menuDisplay: "block"
            });
        }

        hideMenu = () => {
            this.setState({
                iconDisplay: "block",
                menuDisplay: "none"
            });
        }

        render() {
            return(
                <menu>
                    <div onClick={ this.showMenu } style={ {display: this.state.iconDisplay} }>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg" alt="Otwórz menu" />
                    </div>
                    <div style={ {display: this.state.menuDisplay} }>
                        <ul>
                            <li>Menu 1...</li>
                            <li>Menu 2...</li>
                            <li>Menu 3...</li>
                            <li>Menu 4...</li>
                        </ul>
                        <div onClick={ this.hideMenu }>Schowaj menu</div>
                    </div>
                </menu>
            );
        }
    }

    class App extends React.Component {
        render() {
            return <MobileMenu />
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
