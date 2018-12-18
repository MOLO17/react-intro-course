import { createStore, compose, applyMiddleware } from 'redux';

import sagaMiddlewareFactory from 'redux-saga';

import rootReducer from './root.reducer';
import rootSagas from './root.sagas';

const composeEnhancers =
  (process.env.NODE_ENV === 'development' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const configureStore = ({ initialState, shipsDataSource }) => {
  const sagaMiddleware = sagaMiddlewareFactory({
    context: {
      shipsDataSource,
    },
  });

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  );

  sagaMiddleware.run(rootSagas);

  return store;
};

export default configureStore;
