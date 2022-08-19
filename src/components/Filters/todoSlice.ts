import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    status: 'idle',
    todos: [],
  },
  reducers: {},
});

export default filterSlice;
