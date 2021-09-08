import {Dispatch } from 'redux';
import { ActionType } from '../action-types';
import {  UpdateCellAction, DeleteCellAction, InsertCellAfterAction, BundleStartAction, MoveCellAction, Direction } from '../actions';
import { CellTypes } from '../cell';



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

export const moveCell = (id: string, direction: Direction): MoveCellAction => {
  return {
    type: ActionType.MOVE_CELL,
    payload: {
      id,
      direction
    }
  }
 };

export const insertCellAfter = (id: string | null, celltype: CellTypes): InsertCellAfterAction => {
  return {
    type: ActionType.INSERT_CELL_AFTER,
    payload: {
      id,
      type: celltype
    }
  }
};


