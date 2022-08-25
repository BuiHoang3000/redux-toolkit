import React from 'react';
import instance from '../../axios';
import store from '../redux/store';
import { hiddenMessage, showMessage } from '../components/Toast/toastSlice';

type State<T> = {
  status: 'idle' | 'loading' | 'fetched' | 'error';
  data?: T;
  error?: Error;
};

type Cache<T> = { [url: string]: T };

type Action<T> =
  | { type: 'loading' }
  | { type: 'fetched'; payload: T }
  | { type: 'error'; payload: Error };

type Method = 'get' | 'post' | 'put' | 'patch' | 'delete';

const handleToast = (
  title: string,
  message: string,
  type: 'success' | 'error',
) => {
  const id = new Date().getTime();
  store.dispatch(
    showMessage({
      title,
      message,
      id,
      type,
    }),
  );
  setTimeout(() => {
    store.dispatch(hiddenMessage({ id }));
  }, 3000);
};

function useAxios<T = unknown>(
  url: string,
  method: Method = 'get',
  dataRequest?: T,
): State<T> {
  const cache = React.useRef<Cache<T>>({});

  // Used to prevent state update if the component is unmounted
  const cancelRequest = React.useRef<boolean>(false);

  const initialState: State<T> = {
    status: 'idle',
    data: undefined,
    error: undefined,
  };

  // Keep state logic separated
  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case 'loading':
        return { ...initialState, status: 'loading' };
      case 'fetched':
        return { ...initialState, data: action.payload, status: 'fetched' };
      case 'error':
        return { ...initialState, error: action.payload, status: 'error' };
      default:
        return state;
    }
  };

  const [state, dispatch] = React.useReducer(fetchReducer, initialState);

  React.useEffect(() => {
    cancelRequest.current = false;
    dispatch({ type: 'loading' });

    const fetchData = async () => {
      // If a cache exists for this url, return it
      if (cache.current[url]) {
        dispatch({ type: 'fetched', payload: cache.current[url] });
        return;
      }

      await instance({
        method,
        url,
        data: dataRequest,
      })
        .then((response) => {
          if (response.data?.success) {
            cache.current[url] = response.data;
            if (cancelRequest.current) return;

            dispatch({ type: 'fetched', payload: response.data });
            handleToast(
              'Success',
              response.data.message ?? 'Call api success',
              'success',
            );
          } else {
            dispatch({ type: 'error', payload: response.data?.message });
            handleToast(
              'Error',
              response.data?.message ?? 'Call api error',
              'error',
            );
            if (cancelRequest.current) return;
          }
        })
        .catch((error) => {
          dispatch({ type: 'error', payload: error as Error });
          handleToast(
            'Error',
            error?.response?.data?.message ?? 'Api error',
            'error',
          );
          if (cancelRequest.current) return;
        });
    };

    void fetchData();
    // void setTimeout(() => fetchData(), 3000);

    // Use the cleanup function for avoiding a possibly...
    // ...state update after the component was unmounted
    return () => {
      cancelRequest.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return state;
}

export default useAxios;
