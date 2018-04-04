import { createStore, applyMiddleware } from 'redux'; //compose
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import reducer from '../reducers';

const configureStore = () => {
  const middlewares = [
    promise(),
    thunk,
    createLogger()
  ];

  const store = createStore(reducer, applyMiddleware(...middlewares));

  // if (module.hot) {
  //     // Enable Webpack hot module replacement for reducers
  //     module.hot.accept('../reducers', () => {
  //       const nextReducer = require('../reducers').default; // eslint-disable-line global-require
  //       store.replaceReducer(nextReducer);
  //     });
  //   }

  return store;
}

export default configureStore;
