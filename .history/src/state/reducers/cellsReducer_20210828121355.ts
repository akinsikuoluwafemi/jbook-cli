import produce from 'immer';
import { ActionType } from '../action-types';
import { Action } from '../actions';
import { Cell} from '../cell';

interface CellsState {
  loading: boolean;
  error: string | null;
  order: string[];
  data: {
    [key: string]: Cell
  }
  
}

const initialState: CellsState = {
  loading: false,
  error: null,
  order: [],
  data: {}
}



const reducer = produce((state: CellsState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.UPDATE_CELL:
      const { id, content } = action.payload;

      state.data[id].content = content;
      return state;
    case ActionType.DELETE_CELL:
      delete state.data[action.payload];
      state.order.filter(id => id !== action.payload);

      return state;
    case ActionType.MOVE_CELL:
      const { direction } = action.payload;
      // first find the index of the cell you want to move
      const index = state.order.findIndex((id) => id === action.payload.id);
      // after finding the index increment or decrement it wrt the direction the user clicks
      const targetIndex = direction === 'up' ? index - 1 : index + 1;
      // if the index found is the first item or last item, don't do anything
      if (targetIndex < 0 || targetIndex > state.order.length - 1) {
        return state;
      }
      // using immer: move the cell where you want to
      state.order[index] = state.order[targetIndex];
      state.order[targetIndex] = action.payload.id;

      console.log(state.order[index])
      console.log(state.order[index])


      return state;
    case ActionType.INSERT_CELL_BEFORE:
      // create a new cell
      const cell: Cell = {
        content: '',
        type: action.payload.type,
        id: randomId()
      };

      state.data[cell.id] = cell;

      const foundIndex = state.order.findIndex(id => id === action.payload.id);
      
      if (foundIndex < 0) {
        state.order.push(cell.id);
      } else {
        state.order.splice(foundIndex, 0, cell.id);
      }

      return state;
    default:
      return state;

  }
}, initialState);

// create a random number for new cells
const randomId = () => {
  return Math.random().toString(36).substr(2, 5);
};

export default reducer;