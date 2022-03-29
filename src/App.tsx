import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';

import './App.css';
import { Fancy } from './Fancy';

const App = () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
    <Route exact={true} path="/fancy" component={Fancy} />
  </Switch>
);

export default App;
