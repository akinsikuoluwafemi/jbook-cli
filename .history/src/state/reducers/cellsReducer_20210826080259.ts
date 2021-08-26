import { ActionType } from '../action-types';
import { Action } from '../actions';

interface cellsState {
  loading: boolean;
  error: string | null;
  order: string[];
  data: {
    [key: string];
  }
  
}