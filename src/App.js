import './App.css';
import React, { Component } from 'react'
import Header from './components/shared/Header/header';
import Routes from './components/Routes/routes';
import { BrowserRouter as Router, Link } from "react-router-dom";

class App extends Component{
  render(){
  return (
    <Router>
    <div>
      <Header/>
      <Routes/>
    </div>
    </Router>
  );
  }
}

export default App;
