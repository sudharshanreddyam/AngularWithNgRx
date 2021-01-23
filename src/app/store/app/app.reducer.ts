import { createReducer, on } from '@ngrx/store';
import * as actions from './app.actions';

export interface IAppState {
  isLoading: boolean;
};

const initialState: IAppState = {
  isLoading: false,
};

const appReducer = createReducer(
  initialState,
  on( actions.LoadingOn, ( state: IAppState ) => ( { ...state, isLoading: true } ) ),
  on( actions.LoadingOff, ( state: IAppState ) => ( { ...state, isLoading: false } ) ),
);

export default appReducer;
