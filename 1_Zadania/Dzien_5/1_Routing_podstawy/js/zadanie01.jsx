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

    class Home extends React.Component {
        render() {
            return(
                <h1>Witaj na stronie</h1>
            );
        }
    }

    class Blog extends React.Component {
        render() {
            return(
                <h1>Blog</h1>
            );
        }
    }

    class Pricing extends React.Component {
        render() {
            return(
                <h1>Cennik</h1>
            );
        }
    }

    class App extends React.Component {
        render() {
            return(
                <div>
                    <HashRouter>
                        <div>
                            <h1>Aplikacja React z React Router</h1>
                            <ul>
                                <li><Link to="/">home</Link></li>
                                <li><Link to="/blog">blog</Link></li>
                                <li><Link to="/pricing">cennik</Link></li>
                            </ul>
                            <Switch>
                                <Route exact path="/" component={ Home } />
                                <Route path="/blog" component={ Blog } />
                                <Route path="/pricing" component={ Pricing } />
                            </Switch>
                        </div>
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
