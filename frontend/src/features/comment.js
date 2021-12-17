import { createSlice } from '@reduxjs/toolkit';

const commentSlice = createSlice({
  name: 'user',
  initialState: {
    value: '',
  },
  reducers: {
    comment: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { comment } = commentSlice.actions;
export default commentSlice.reducer;
