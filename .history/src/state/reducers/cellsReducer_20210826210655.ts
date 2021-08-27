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
      return;
    case ActionType.DELETE_CELL:
      delete state.data[action.payload];
      state.order.filter(id => id !== action.payload);

      return;
    case ActionType.MOVE_CELL:
      const { direction } = action.payload;
      // first find the index of the cell you want to move
      const index = state.order.findIndex((id) => id === action.payload.id);
      // after finding the index increment or decrement it wrt the direction the user clicks
      const targetIndex = direction === 'up' ? index - 1 : index + 1;

      // if the index found is the first item or last item, don't do anything
      if (targetIndex < 0 || targetIndex > state.order.length - 1) {
        return;
      }
      // using immer: set the cell to 
      state.order[index] = state.order[targetIndex];
      state.order[targetIndex] = action.payload.id;

      return;
    case ActionType.INSERT_CELL_BEFORE:
      const cell: Cell = {
        content: '',
        type: action.payload.type,
        id: randomId()
      };

      state.data[cell.id] = cell;

      const foundIndex = state.order.findIndex(id => id === action.payload.id);


      return state;
    default:
      return state;

  }
});

const randomId = () => {
  return Math.random().toString(36).substr(2, 5);
};

export default reducer;