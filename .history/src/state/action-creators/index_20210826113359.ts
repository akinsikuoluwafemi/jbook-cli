import { ActionType } from '../action-types';
import { Action, UpdateCellAction, DeleteCellAction, InsertCellBeforeAction, MoveCellAction } from '../actions';



export const updateCell = (id: string, content: string): UpdateCellAction => {
  return {
    type: ActionType.UPDATE_CELL,
    payload: {
      id,
      content
    }
  }
 };

export const deleteCell = (): DeleteCellAction => {
  
};

export const moveCell = (): MoveCellAction => { };

export const insertCellBefore = (): InsertCellBeforeAction => { };


