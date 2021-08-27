import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { ActionType } from './action-types';


let middlewares = [thunk]

export const store = createStore(reducers, {}, applyMiddleware(...middlewares));

store.dispatch({
  type: ActionType.INSERT_CELL_BEFORE,
  payload: {
    id: null,
    type: 'code'
  }
})

store.dispatch({
  type: ActionType.INSERT_CELL_BEFORE,
  payload: {
    id: null,
    type: 'text'
  }
})

store.dispatch({
  type: ActionType.UPDATE_CELL,
  payload: {
    id: 
  }
})


console.log(store.getState())
const idIndex = store.getState().cells?.order[0]
console.log(idIndex)
