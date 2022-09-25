import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from 'react';

export const INIT_DATA = 'INIT_DATA';
export const PREVIOUS_PAGE = 'PREVIOUS_PAGE';
export const NEXT_PAGE = 'NEXT_PAGE';
export const GO_TO_PAGE = 'GO_TO_PAGE';
export const FILTER = 'FILTER';
export const SORT = 'SORT';
export const CHANGE_VIEW = 'CHANGE_VIEW';

export type TableData = {
  data: {
    id: string | number;
    [k: string]: any;
  }[];
  title?: string;
  current: number;
  filter?: {
    [k: string]: any;
  };
  sort?: string;
  perPage: number;
  total: number;
  view?: 'LARGE' | 'MEDIUM';
};

export type TableReducerProps = {
  type: string;
  initData?: any[];
  title?: string;
  total?: number;
  perPage?: number;
  filter?: {
    [k: string]: any;
  };
  sort?: any;
  goToPage?: number;
  view?: 'LARGE' | 'MEDIUM';
  [k: string]: any;
};

type TableContextProviderProps = {
  reducerFunc?: (state: TableData, action: TableReducerProps) => TableData;
  children: ReactNode;
};

const TableContext = createContext<TableData | undefined>(undefined);
const TableDispatch = createContext<Dispatch<TableReducerProps> | undefined>(
  undefined,
);

// Hook
export const useTableState = () => {
  const useTableContext = useContext(TableContext);
  if (!useTableContext) {
    throw new Error('Please use useTable inside the TableProvider');
  }
  return useTableContext;
};

export const useTableDispatch = () => {
  const useTableDispatch = useContext(TableDispatch);
  if (!useTableDispatch) {
    throw new Error('Please use useTable inside the TableDispatch');
  }
  return useTableDispatch;
};

export const TableReducerFn = (state: TableData, action: TableReducerProps) => {
  switch (action.type) {
    case INIT_DATA: {
      if (
        !action.initData ||
        action.total === null ||
        action.total === undefined
      ) {
        throw new Error(`Action type ${INIT_DATA} must go with initData array`);
      }
      return {
        ...state,
        data: action.initData,
        title: action.title,
        current: 1,
        total: action.total,
        perPage: action.perPage || 10,
      };
    }

    case PREVIOUS_PAGE: {
      if (state.current > 1) return { ...state, current: state.current - 1 };
      break;
    }

    case NEXT_PAGE: {
      if (state.current < state.total) {
        return { ...state, current: state.current + 1 };
      }
      break;
    }

    case GO_TO_PAGE: {
      if (action.goToPage === null || action.goToPage === undefined) {
        throw new Error(`Action type ${GO_TO_PAGE} must go with page number`);
      }
      if (action.goToPage < 0 || action.goToPage > state.total) {
        throw new Error(
          `Action type ${GO_TO_PAGE} must go with page number more than 0 or less than length data`,
        );
      }
      return { ...state, current: action.goToPage };
    }

    case FILTER: {
      return { ...state, filter: action.filter, current: 1 };
    }

    case SORT: {
      return { ...state, sort: action.sort, current: 1 };
    }

    case CHANGE_VIEW: {
      return { ...state, view: action.view };
    }

    default:
      return state;
  }
};

// Provider
export const TableContextProvider = ({
  reducerFunc,
  children,
}: TableContextProviderProps) => {
  const [state, dispatch] = useReducer(reducerFunc || TableReducerFn, {
    data: [],
    title: '',
    current: 1,
    total: 1,
    perPage: 10,
    view: 'LARGE',
  });

  return (
    <TableContext.Provider value={state}>
      <TableDispatch.Provider value={dispatch}>
        {children}
      </TableDispatch.Provider>
    </TableContext.Provider>
  );
};
