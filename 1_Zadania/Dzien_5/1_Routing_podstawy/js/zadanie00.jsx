import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Switch,
    Link,
    NavLink
} from "react-router-dom";

document.addEventListener('DOMContentLoaded', function(){

    class AboutCompany extends React.Component {
        render() {
            return(
                <p>Trochę więcej na temat firmy...</p>
            );
        }
    }

    class AboutUs extends React.Component {
        render() {
            return(
                <p>Trochę więcej o nas...</p>
            );
        }
    }

    class Main extends React.Component {
        render() {
            return(
                <h1>Witaj na stronie</h1>
            );
        }
    }

    class App extends React.Component {
        render() {
            return(
                <div>
                    <h1>Aplikacja React z React Router</h1>
                    <HashRouter>
                        <Switch>
                            <Route exact path="/" component={ Main } />
                            <Route path="/about/us" component={ AboutUs } />
                            <Route path="/about/company" component={ AboutCompany } />
                        </Switch>
                    </HashRouter>
                </div>
            );
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
