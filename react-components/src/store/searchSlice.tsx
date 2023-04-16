import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    value: '',
  },
  reducers: {
    onChange(state, action) {
      state.value = action.payload.e.target.value;
    },
    onSubmit(state, action) {
      action.payload.e.preventDefault();
    },
  },
});

export const { onChange, onSubmit } = searchSlice.actions;
export default searchSlice.reducer;
