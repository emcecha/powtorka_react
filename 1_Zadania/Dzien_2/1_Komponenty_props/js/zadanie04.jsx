import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    let menu = [
        {
            urL     :   '/',
            text    :   'Strona główna'
        },
        {
            urL     :   '/blog',
            text    :   'Blog'
        },
        {
            urL     :   '/pricing',
            text    :   'Cennik'
        },
        {
            urL     :   '/contact',
            text    :   'Kontakt'
        }
    ];

    function MenuOne(props) {

        let items = props.menu.map((el,index) => {
            return(
                <li key={ index + el.text }>
                    <a href={ el.urL }>{ el.text }</a>
                </li>
            );
        });

        return <ul>{ items }</ul>
    }

    class MenuTwo extends React.Component {
        render() {

            let items = this.props.menu.map((el,index) => {
                return(
                    <li key={ index + el.text }>
                        <a href={ el.urL }>{ el.text }</a>
                    </li>
                );
            });

            return <ul>{ items }</ul>
        }
    }

    class App extends React.Component {
        render() {
            return(
                <div>
                    <MenuOne menu={ this.props.menu } />
                    <MenuTwo menu={ this.props.menu } />
                </div>
            );
        }
    }

    ReactDOM.render(
        <App menu={ menu } />,
        document.getElementById('app')
    );
});
