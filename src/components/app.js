import React, { Component } from 'react';
import { BrowserRouter, Switch,Route } from 'react-router-dom'
import Home from './home';
import Dashboard from './dashboard';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/dashboard'} component={Dashboard} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
