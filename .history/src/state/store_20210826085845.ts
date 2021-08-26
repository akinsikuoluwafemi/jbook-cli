import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

let middlewares = []

export const store = createStore(reducers, {}, applyMiddleware(thunk))