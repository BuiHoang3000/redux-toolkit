import { createSlice } from '@reduxjs/toolkit';

const toastSlice = createSlice({
  name: 'toast',
  initialState: {
    type: '',
    label: '',
    message: '',
  },
  reducers: {
    setToast: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setToast } = toastSlice.actions;
export default toastSlice;
