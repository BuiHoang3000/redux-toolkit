import { configureStore } from '@reduxjs/toolkit';
import todoListSlice from '../components/TodoList/todoListSlice';
import filterSlice from '../components/Filters/todoSlice';

const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    todoList: todoListSlice.reducer,
  },
});

export default store;
