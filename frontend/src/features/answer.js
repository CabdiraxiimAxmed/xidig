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
    clearAnswer: state => {
      state.value = {};
    },
  },
});

export const { answer, clearAnswer } = answerSlice.actions;
export default answerSlice.reducer;
