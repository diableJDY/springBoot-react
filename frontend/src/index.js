import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import SideBar from "./components/layout/SideBar";

const lv = React.createElement("h2",null,'HelloWord222')

const routing = (
    <div>
        <Header/>
            <SideBar/>
        <Footer/>
    </div>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
