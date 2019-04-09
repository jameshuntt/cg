import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { Navbar } from 'react-bootstrap'
import './App.css';
import Forums from './components/Forums'
import About from './components/AboutUs'
import Home from './components/Home'
import CustomNav from './components/CustomNavbar'
import CarouselHome from './components/Carousel'
import Expand from './components/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div>
          <Navbar/>
          <Redirect from="/" to="/Home"/>
          <Switch>
          <Route exact path="/Home"component={Home}/>
          <Route path="/Forums"component={Forums}/>
          <Route path="/AboutUs"component={About}/>
          </Switch>
        </div>
      </Router>
      <CustomNav />
      <CarouselHome />
      <Expand />
      </div>
    );
  }
}

export default App;
