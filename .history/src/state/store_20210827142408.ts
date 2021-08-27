import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { } from './action-types';



export const store = createStore(reducers, {}, applyMiddleware(thunk));

