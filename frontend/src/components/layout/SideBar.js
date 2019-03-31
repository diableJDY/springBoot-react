import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch ,NavLink} from "react-router-dom";

import Home from '../../routes/Home';
import About from '../../routes/About';
import Posts from '../../routes/Posts';
import MyPage from '../../routes/MyPage';
import Login from '../../routes/Login';
import Search from '../../routes/Search'
import NotFound from "../../routes/NotFound";


class SideBar extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div className="sideMenu">
                        <ul>
                            <li><NavLink to="/">home</NavLink></li>
                            <li><NavLink to="/about">about</NavLink></li>
                            <li><NavLink to="/posts">posts</NavLink></li>
                        </ul>
                    </div>
                    <div className="contents">
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/about/:userName" component={About}/>
                            <Route path="/posts" component={Posts}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/me" component={MyPage}/>
                            <Route path="/search" component={Search}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default SideBar;