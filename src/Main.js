import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Dev from './Dev';
import Design from './Design';

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/design" component={Design} />
      <Route path="/dev" component={Dev} />
    </Switch>
  );
};

export default Main;
