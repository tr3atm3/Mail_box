import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "Auth",
  initialState: {
    tokenId: null,
  },
  reducers: {
    saveTokenId: (state, action) => {
      return {
        ...state,
        tokenId: action.payload,
      };
    },
  },
});
export const { saveTokenId } = AuthSlice.actions;
export default AuthSlice.reducer;
