import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../App.css';
import Header from './Header';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

class AppInit extends Component { 
  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <Route exact path="/" component={HomePage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/register" component={RegisterPage}/>
        </div>
      </div>
    );
  }
}

export default AppInit;
