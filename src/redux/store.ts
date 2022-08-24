import { configureStore } from '@reduxjs/toolkit';
import toastSlice from '../components/Toast/toastSlice';
import filterSlice from '../components/Filters/filterSlice';
import todoListSlice from '../components/TodoList/todoListSlice';

const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    todoList: todoListSlice.reducer,
    toast: toastSlice.reducer,
  },
});

export default store;
