import { createReducer, on } from '@ngrx/store';
import { IUser } from './../../interfaces/user';
import * as actions from './auth.action';

export interface IAuthState {
  isAuth: boolean;
  userInfo: IUser;
};

const initialState: IAuthState = {
  isAuth: false,
  userInfo: null
};

const authReducer = createReducer(
  initialState,
  on( actions.Authenticated, ( state: IAuthState ) => ( { ...state, isAuth: true } ) ),
  on( actions.Logout, ( state: IAuthState ) => ( { ...state, isAuth: false, userInfo: null } ) ),
  on( actions.SetUserInfo, ( state: IAuthState, userInfo ) => ( { ...state, userInfo } ) )
);

export default authReducer;
