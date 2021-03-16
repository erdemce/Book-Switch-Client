import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import { rootSaga } from './sagas';
import { loadState, saveState } from './utils';
import throttle from 'lodash/throttle';
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === 'object' && window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_
    ? window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_({})
    : compose;

const persistedState = loadState();
const store = createStore(reducers, persistedState, composeEnhancers(applyMiddleware(sagaMiddleware)));

window.store = store;

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

sagaMiddleware.run(rootSaga);

export default store;