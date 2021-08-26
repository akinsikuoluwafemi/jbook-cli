import { ActionType } from '../action-types';
import { Action } from '../actions';
import {} from '../'

interface cellsState {
  loading: boolean;
  error: string | null;
  order: string[];
  data: {
    [key: string]: Cell
  }
  
}