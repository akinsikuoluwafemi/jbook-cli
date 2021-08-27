import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import {} from './'

let middlewares = [thunk]

export const store = createStore(reducers, {}, applyMiddleware(...middlewares));

store.dispatch({
  
})

store.getState()
