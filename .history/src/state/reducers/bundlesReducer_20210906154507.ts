import produce from 'immer';
import {ActionType} from '../action-types';
import {Action} from '../actions';

interface BundlesState {
  [key: string]: {
    loading: boolean;
    code: string;
    err: string;
  }
}

const initialState: BundlesState = {}

const reducer = produce((state: BundlesState = initialState, action: Acti) => {


},initialState);