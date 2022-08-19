import axios from 'axios';
// import { setToast } from './src/components/Toast/toastSlice';
// import store from './src/redux/store';

const instance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BACKEND_URL,
});

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error: any) => {
    if (error.response.status !== 200) {
      alert(error.response.statusText || 'Connect API error');
      // store.dispatch(
      //   setToast({
      //     type: '',
      //     label: '',
      //     message: '',
      //   }),
      // );
    }
  },
);

export default instance;
