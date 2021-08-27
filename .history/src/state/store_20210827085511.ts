import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { ActionType } from './action-types';



export const store = createStore(reducers, {}, applyMiddleware(thunk));

const state = store.getState();
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
state.cells?.data


// store.dispatch({
//   type: ActionType.INSERT_CELL_BEFORE,
//   payload: {
//     id: null,
//     type: 'code'
//   }
// })

// store.dispatch({
//   type: ActionType.INSERT_CELL_BEFORE,
//   payload: {
//     id: null,
//     type: 'text'
//   }
// })




// console.log(store.getState())
// const idIndex = store.getState().cells?.order[0]
// // console.log(typeof idIndex)


// store.dispatch({
//   type: ActionType.UPDATE_CELL,
//   payload: {
//     id:  idIndex,
//     content: 'I just modified you'
//   }
// })

// console.log(store.getState())
