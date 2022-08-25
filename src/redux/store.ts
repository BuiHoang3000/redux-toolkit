import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from '~/components/Filters';
import { toastSlice } from '~/components/Toast';
import { todoListSlice } from '~/components/TodoList';

const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    toast: toastSlice.reducer,
    // todoList: todoListSlice.reducer,
  },
});

export default store;
