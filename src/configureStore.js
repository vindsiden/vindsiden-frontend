import { createStore, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import immutableStateInvariant from 'redux-immutable-state-invariant';

let finalCreateStore;
const reduxRouterMiddleware = routerMiddleware(browserHistory);

if (__DEV_TOOLS__) {
  finalCreateStore = compose(
    applyMiddleware(thunk, reduxRouterMiddleware, immutableStateInvariant()),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  )(createStore);
} else {
  finalCreateStore = compose(
    applyMiddleware(thunk, reduxRouterMiddleware)
  )(createStore);
}


export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
