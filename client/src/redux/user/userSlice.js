import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: null, // Changed from false to null for error handling clarity
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.error = null; // Clear any previous errors when starting sign-in
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null; // Clear any previous errors when sign-in succeeds
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload; // Set the error message from action payload
    },
  },
});

export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;

export default userSlice.reducer;
