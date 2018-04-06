import { createStore, applyMiddleware } from 'redux'; //compose
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import reducer from '../reducers';

const configureStore = () => {
  const middlewares = [
    thunk,
    promise(),
    createLogger()
  ];

  const store = createStore(reducer, applyMiddleware(...middlewares));

  return store;
}

export default configureStore;
