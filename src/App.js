import React from 'react';
import logo from './logo.svg';

import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import Login from './components/Login'
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

import './App.css';


export default class  App extends React.Component {

  callbackFunction = (childData) => {
    console.log('CHILD DATA ',childData);
    //this.setState({message: childData})
} 
  
  render(){
  return (
    <div className="App">
        Home Page
    </div>
  );
  }
}

