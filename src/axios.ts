import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BACKEND_URL,
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error?.response;
  },
);

export default instance;
