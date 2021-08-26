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

export const deleteCell = (id: string): DeleteCellAction => {
  return {
    type: ActionType.DELETE_CELL,
    payload: id
  }
};

export const moveCell = (id: string, direction: ): MoveCellAction => {
  return {
    type: ActionType.MOVE_CELL,
    payload: {
      id,
      direction
    }
  }
 };

export const insertCellBefore = (): InsertCellBeforeAction => { };


