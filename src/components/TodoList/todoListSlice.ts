import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import instance from '../../../axios';

const todoListSlice = createSlice({
  name: 'todoList',
  initialState: { status: 'idle', todos: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.status = 'idle';
      })
      .addCase(addNewTodo.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(addNewTodo.fulfilled, (state, action) => {
        state.status = 'idle';
      });
  },
});

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  let data: any = [];
  await instance('/todo').then((res: any) => {
    data = res.todo;
  });
  return data;
});

export const addNewTodo = createAsyncThunk(
  'todos/addNewTodo',
  async (newTodo: any) => {
    let data: any = [];
    await instance.post('/todo', newTodo).then((res: any) => {
      data = res.message;
    });
    return data;
  },
);

export default todoListSlice;
