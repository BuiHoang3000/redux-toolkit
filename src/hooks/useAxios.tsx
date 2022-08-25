import React from 'react';
import { useDispatch } from 'react-redux';
//
import axiosClient from '~/axios';
import { hiddenMessage, showMessage } from '~/components/Toast';

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

function useAxios<T = unknown>(url: string, method: Method = 'get') {
  const dispatchStr = useDispatch();
  // Used to prevent state update if the component is unmounted
  const cancelRequest = React.useRef<boolean>(true);

  const initialState: State<T> = {
    status: 'idle',
    data: undefined,
    error: undefined,
  };

  const handleToast = (
    title: string,
    message: string,
    type: 'success' | 'error',
  ) => {
    const id = new Date().getTime();
    dispatchStr(
      showMessage({
        title,
        message,
        id,
        type,
      }),
    );
    setTimeout(() => {
      dispatchStr(hiddenMessage({ id }));
    }, 3000);
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

  React.useLayoutEffect(() => {
    cancelRequest.current = false;

    // Use the cleanup function for avoiding a possibly...
    // ...state update after the component was unmounted
    return () => {
      cancelRequest.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchApi = React.useCallback(async (dataRequest?: T) => {
    dispatch({ type: 'loading' });

    await axiosClient({
      method,
      url,
      data: dataRequest,
    })
      .then((response) => {
        if (response.data?.success) {
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
  }, []);

  return { ...state, fetchApi };
}

export default useAxios;
