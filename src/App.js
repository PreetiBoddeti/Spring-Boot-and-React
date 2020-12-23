import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
// import FirstComponent from './components/FirstComponenet';
// import SecondComponent from './components/SecondComponent';
import HomeComponent from './components/HomeComponent';
import TodoComponent from './components/TodoComponent';
import Footer from './components/Footer';
import './components/bootsrap.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Router>
          <Switch>
          <Route path="/" exact  component={HomeComponent}></Route>
          <Route path="/home" component={HomeComponent}></Route>
          <Route path="/todo" component={TodoComponent}></Route>
          <Route component={errorComponent}></Route>
          </Switch>
        </Router>
        <Footer></Footer>
      </div>
    );
  }
}

function errorComponent(){
  return (
    <div>
      This is an error. Please contact Admin.
    </div>
  )
}

export default App;
