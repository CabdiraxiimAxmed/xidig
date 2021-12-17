import { createSlice } from '@reduxjs/toolkit';

const answerSlice = createSlice({
  name: 'answer',
  initialState: {
    value: {},
  },
  reducers: {
    answer: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { answer } = answerSlice.actions;
export default answerSlice.reducer;
