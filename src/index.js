import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/Login';
import Gitrepos from './components/Gitrepos';
import Covid from './components/Covid';
import Forgotpassword from "./components/Forgotpassword"
import Dashboard from './components/Dashboard';
import Projects from './components/Projects'
import Contact from './components/Contact'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
            <div>

<div id="wrapper">

<div id="sidebar-wrapper">
    <ul class="sidebar-nav">
        <li class="sidebar-brand">
            <a href="/Home">
                Home
            </a>
        </li>
        <li>
            <a href="/dashboard">Dashboard</a>
        </li>
        
        <li>
            <a href="/Covid">Covid - 19</a>
        </li>
        <li>
            <a href="/Projects">Projects</a>
        </li>
        <li>
            <a href="/Gitrepos">My Gitrepos</a>
        </li>
        <li>
            <a href="#">About</a>
        </li>
        <li>
            <a href="#">Services</a>
        </li>
        <li>
            <a href="/Contact">Contact</a>
        </li>
        <li>
            <a href="/myreactprofile/Login">Login</a>
        </li>
    </ul>
</div>
<div id="page-content-wrapper">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
            <Route exact path="/" component={App} />
                <Route path="/Home" component={App} />
                <Route path="/myreactprofile/Login" component={Login} />
                <Route path="/Dashboard" component={Dashboard} />
                <Route path="/Forgotpassword" component={Forgotpassword}/>
                <Route path="/Covid" component={Covid}/>
                <Route path="/Gitrepos" component={Gitrepos}/>
                <Route path="/Projects" component={Projects}/>
                <Route path="/Contact" component={Contact}/>
                
            </div>
        </div>
    </div>
</div>

</div>
           </div>

  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
