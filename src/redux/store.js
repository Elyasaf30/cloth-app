import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewaers = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewaers))

export default store;