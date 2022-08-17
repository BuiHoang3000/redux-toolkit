import { configureStore } from '@reduxjs/toolkit';
import todoSlice from '../components/Filters/todoSlice';

const store = configureStore({
  reducer: {
    todoList: todoSlice.reducer,
  },
});

export default store;
