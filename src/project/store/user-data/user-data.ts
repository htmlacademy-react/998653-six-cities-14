import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace, RequestStatus } from '../../const/const';
import { TUserData } from '../../types/state.type';
import { checkAuth, login, logout } from '../api-actions';

const initialState: TUserData = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
  loginSendingStatus: RequestStatus.Idle,
};

const userData = createSlice(
  {
    name: NameSpace.User,
    initialState,
    reducers: {
      dropSendingStatus(state){
        state.loginSendingStatus = RequestStatus.Idle;
      }
    },
    extraReducers(builder){
      builder
        .addCase(checkAuth.pending, (state) => {
          state.user = null;
          state.authorizationStatus = AuthorizationStatus.Unknown;
        })
        .addCase(checkAuth.fulfilled, (state, action) => {
          state.user = action.payload;
          state.authorizationStatus = AuthorizationStatus.Auth;
        })
        .addCase(checkAuth.rejected, (state) => {
          state.user = null;
          state.authorizationStatus = AuthorizationStatus.NoAuth;
        })
        .addCase(login.pending, (state) => {
          state.loginSendingStatus = RequestStatus.Pending;
        })
        .addCase(login.fulfilled, (state, action) => {
          state.loginSendingStatus = RequestStatus.Success;
          state.user = action.payload;
          state.authorizationStatus = AuthorizationStatus.Auth;
        })
        .addCase(login.rejected, (state) => {
          state.loginSendingStatus = RequestStatus.Error;
          state.user = null;
        })
        .addCase(logout.pending, (state) => {
          state.user = null;
          state.authorizationStatus = AuthorizationStatus.NoAuth;
        });

    }
  }
);

export const { dropSendingStatus } = userData.actions;
