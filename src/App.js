import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import ShowContainer from './Container/showContainer';
class App extends Component {
  render() {
    return (
 
    <BrowserRouter>
    <Switch>
    <Route path="/" exact component={ShowContainer} />
  </Switch>
  </BrowserRouter>
  );
    }
}

export default App;


