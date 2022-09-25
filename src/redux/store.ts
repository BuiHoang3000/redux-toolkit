import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    // filter: filterSlice.reducer,
    // toast: toastSlice.reducer,
    // todoList: todoListSlice.reducer,
  },
});

export default store;
