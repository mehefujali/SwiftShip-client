import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { ITokenPayload } from "@/types";
import { jwtDecode } from "jwt-decode";
import type { RootState } from "@/redux/store";

interface AuthState {
  user: ITokenPayload | null;
  token: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ token: string | null }>) => {
      const { token } = action.payload;

      if (!token) {
        state.user = null;
        state.token = null;
        return;
      }

      try {
        const decodedUser: ITokenPayload = jwtDecode(token);
        state.user = decodedUser;
        state.token = token;
      } catch (e) {
        console.error("Failed to decode token", e);
        state.user = null;
        state.token = null;
      }
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentToken = (state: RootState) => state.auth.token;