import { createSlice } from '@reduxjs/toolkit';

const todoListSlice = createSlice({
  name: 'todoList',
  initialState: { status: 'idle', todos: [] },
  reducers: {},
});

export default todoListSlice;
