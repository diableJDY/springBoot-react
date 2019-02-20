import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Users from "./components/Users";
import Contact from "./components/Contact";
import NotFound from './components/NotFound'
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Header from "./components/layout/Header";
import PostContainer from "./containers/PostContainer";

const routing = (
    <div>
    <Header/>
    <PostContainer/>
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/users" component={Users} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
    </div>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
