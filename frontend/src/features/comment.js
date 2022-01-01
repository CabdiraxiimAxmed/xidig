import { createSlice } from '@reduxjs/toolkit';

const commentSlice = createSlice({
  name: 'user',
  initialState: {
    value: {},
  },
  reducers: {
    comment: (state, action) => {
      state.value = action.payload;
    },
    clearComment: state => {
      state.value = {};
    },
  },
});
export const { comment, clearComment } = commentSlice.actions;
export default commentSlice.reducer;
