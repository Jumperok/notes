import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
//import reducer from './reducers';
import App from './components/App';
//import thunk from 'redux-thunk';
//import { createLogger } from 'redux-logger';
//import promise from 'redux-promise-middleware';
import configureStore from './store';

//import initialData from '../data';
const store = configureStore();
//const store = createStore(reducer, applyMiddleware(promise(), thunk, createLogger()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
