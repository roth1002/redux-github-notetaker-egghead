import React from 'react';
import { default as BrowserHistory } from 'react-router/lib/BrowserHistory';
import { default as HashHistory } from 'react-router/lib/HashHistory';
import App from './containers/App';


const history = process.env.NODE_ENV === 'production' ?
  new HashHistory() :
  new BrowserHistory() ;


React.render(<App history={history} />, document.getElementById('app'));

