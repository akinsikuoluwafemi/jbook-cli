import { ActionType } from '../action-types';
import { CellTypes } from '../cell';

export type Direction = 'up' | 'down';

export interface MoveCellAction {
  type: ActionType.MOVE_CELL;
  payload: {
    id: string;
    direction: Direction
  }

}

export interface DeleteCellAction {
  type: ActionType.DELETE_CELL;
  payload: string | any; //come back and fix the immer error in typecript so you can remove the any;
}

export interface InsertCellBeforeAction {
  type: ActionType.INSERT_CELL_BEFORE;
  payload: {
    id: string | null;
    type: CellTypes;
  }
}

export interface UpdateCellAction {
  type: ActionType.UPDATE_CELL;
  payload: {
    id: string | any; //come back and fix the immer error in typecript so you can remove the any
    content: string;
  }
}

export type Action =
    MoveCellAction
  | DeleteCellAction
  | InsertCellBeforeAction
  | UpdateCellAction;