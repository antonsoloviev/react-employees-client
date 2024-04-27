import { User } from "@prisma/client";
import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../../app/services/auth";
import { RootState } from "../../app/store";

interface InitialState {
  user: User & { token: string } | null;
  isAuthenticated: boolean;
}

const initialState: InitialState = {
  user: null,
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    })
    builder.addMatcher(authApi.endpoints.register.matchFulfilled, (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    })
    builder.addMatcher(authApi.endpoints.current.matchFulfilled, (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    })
  }
})

export const { logout } = authSlice.actions;
export default authSlice.reducer;

export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const selectUser = (state: RootState) => state.auth.user;