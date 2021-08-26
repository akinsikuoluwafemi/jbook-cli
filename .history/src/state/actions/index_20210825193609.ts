import { ActionType } from '../action-types';

interface MoveCellAction {
  type: ActionType.MOVE_CELL;
  payload :

}

interface DeleteCellAction {
  type: ActionType.DELETE_CELL
}

interface InsertCellBeforeAction {
  type: ActionType.INSERT_CELL_BEFORE
}

interface UpdateCell {
  type: ActionType.UPDATE_CELL
}