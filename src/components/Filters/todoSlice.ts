import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todoList',
  initialState: {
    status: 'idle',
    todos: [
      { id: 1, name: 'Learn Yoga', completed: false, priority: 'medium' },
      { id: 2, name: 'Learn Redux', completed: true, priority: 'high' },
      { id: 3, name: 'Learn JavaScript', completed: false, priority: 'low' },
    ],
  },
  reducers: {},
});

export default todoSlice;
