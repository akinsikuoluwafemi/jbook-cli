import { combineReducers } from 'redux';
import cellsReducer from './cellsReducer';
import bundlesRed

const reducers = combineReducers({
  cells: cellsReducer
});


export default reducers;

export type RootState = ReturnType<typeof reducers>;
