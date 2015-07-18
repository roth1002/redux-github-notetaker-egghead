import React, { Component, PropTypes } from 'react';
import Router, { Route } from 'react-router';
import NoteTakerApp from './NoteTakerApp';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import * as components from '../components';
import * as reducers from '../reducers';


const {
  Main,
  Profile,
  Home
} = components;


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);


export default class App extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired
  }

  render() {
    const { history } = this.props;
    return (
      <Provider store={store}>
        {renderRoutes.bind(null, history)}
      </Provider>
    );
  }
}



function renderRoutes(history) {
  return (
    <Router history={history}>
      <Route component={NoteTakerApp}>
        <Route path="/" component={Home} />
        <Route path="profile/:username" component={Profile} />
      </Route>
    </Router>
  )
}

