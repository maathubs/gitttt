import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login/Login'

import Home from './Home/Home';

import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        {/* <Layout> */}
          <Switch>
            <Route path="/Login" component={Login} />
            <Route path="/Home" component={Home} />
           
            <Redirect from="/" exact to="/Login" />
          </Switch>   
        {/* </Layout> */}
      </div>
      </BrowserRouter>
    );
  }
}
export default App;
