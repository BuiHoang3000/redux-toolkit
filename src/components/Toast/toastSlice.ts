import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ToastType } from './Toast';

type App = {
  messages: ToastType[];
};

const initialState: App = {
  messages: [],
};

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    showMessage: (state, action: PayloadAction<ToastType>) => {
      state.messages.push(action.payload);
    },
    hiddenMessage: (state, action: PayloadAction<{ id: number }>) => {
      state.messages = state.messages.filter(
        (item) => item.id !== action.payload.id,
      );
    },
  },
});

export const { showMessage, hiddenMessage } = toastSlice.actions;

export default toastSlice;
