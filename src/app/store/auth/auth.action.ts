import { createAction, props } from '@ngrx/store';
import { IUser } from './../../interfaces/user';



export const Authenticated = createAction( '[auth] Authenticated', props<IUser>() );
export const AuthenticatedSuccess = createAction( '[auth] Authenticated Success' );
export const Logout = createAction( '[auth] Logout' );
export const LogoutSuccess = createAction( '[auth] Logout Success' );
export const SetUserInfo = createAction( '[auth] Set User Info', props<IUser>() );
export const SetUserInfoSuccess = createAction( '[auth] Set User Info Success' );
