import {createSlice} from '@reduxjs/toolkit';

let initialState = null;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      return action.payload;
    },
  },
});

export const {updateUser} = userSlice.actions;

export default userSlice.reducer;
