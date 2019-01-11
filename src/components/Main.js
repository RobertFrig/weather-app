import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Forecasts from './Forecasts.js';
import SingleForecast from './SingleForecast.js';

const Main = props => (
  <Switch>
    <Route exact path="/" component={Forecasts} />
    <Route path="/zipcode/:id" component={SingleForecast} />
  </Switch>
);

export default Main;