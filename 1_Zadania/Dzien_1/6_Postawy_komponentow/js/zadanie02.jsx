import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    function MenuOne() {
        return(
            <ul>
                <li>
                    <a href="#">Strona główna</a>
                </li>
                <li>
                    <a href="#blog">Blog</a>
                </li>
                <li>
                    <a href="#pricing">Cennik</a>
                </li>
                <li>
                    <a href="#contact">Kontakt</a>
                </li>
            </ul>
        );
    }

    class MenuTwo extends React.Component {
        render() {
            return(
                <ul>
                    <li>
                        <a href="#">Strona główna</a>
                    </li>
                    <li>
                        <a href="#blog">Blog</a>
                    </li>
                    <li>
                        <a href="#pricing">Cennik</a>
                    </li>
                    <li>
                        <a href="#contact">Kontakt</a>
                    </li>
                </ul>
            );
        }
    }

    class App extends React.Component {
        render() {
            return(
                <div>
                    <MenuOne />
                    <MenuTwo />
                </div>
            );
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
