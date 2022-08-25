import axios from 'axios';

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BACKEND_URL,
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error?.response;
  },
);

export default axiosClient;
