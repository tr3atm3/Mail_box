import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "Auth",
  initialState: {
    tokenId: null,
    email: null,
  },
  reducers: {
    saveUserInfo: (state, action) => {
      return {
        ...state,
        email: action.payload.email,
        tokenId: action.payload.tokenId,
      };
    },
  },
});
export const { saveUserInfo } = AuthSlice.actions;
export default AuthSlice.reducer;
