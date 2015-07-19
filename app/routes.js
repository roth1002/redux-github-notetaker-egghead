import React from 'react';
import Router, { Route } from 'react-router';
import NoteTakerApp from './containers/NoteTakerApp';
import * as components from './components';


const {
  Profile,
  Home
} = components;


export default (
  <Route component={NoteTakerApp}>
    <Route path="/" component={Home} />
    <Route path="profile/:username" component={Profile} />
  </Route>
)
