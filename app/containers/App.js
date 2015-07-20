/* global __DEVTOOLS__ */
import React, { Component, PropTypes } from 'react';
import Router from 'react-router';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { Provider } from 'react-redux';
import * as reducers from '../reducers';
import routes from '../routes';

let finalCreateStore;

if (__DEVTOOLS__) {
  const { devTools, persistState } = require('redux-devtools');
  finalCreateStore = compose(
    applyMiddleware(thunk, promise),
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
    createStore
  );
} else {
  finalCreateStore = applyMiddleware(thunk, promise)(createStore);
}

const reducer = combineReducers(reducers);
const store = finalCreateStore(reducer);


export default class App extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired
  }

  render() {
    const { history } = this.props;
    const elements = [
      <Provider store={store}>
        {() => <Router history={history} children={routes} />}
      </Provider>
    ];

    if (__DEVTOOLS__) {
      const { DevTools, DebugPanel, LogMonitor } = require('redux-devtools/lib/react');
      elements.push(
        <DebugPanel top right bottom key="debugPanel">
          <DevTools store={store} monitor={LogMonitor}/>
        </DebugPanel>
      );
    }

    return (
      <div>{elements}</div>
    );
  }
}
