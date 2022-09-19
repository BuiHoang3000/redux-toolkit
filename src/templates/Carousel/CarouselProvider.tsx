import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from 'react';

export const INIT_DATA = 'INIT_DATA';
export const PREVIOUS = 'PREVIOUS';
export const NEXT = 'NEXT';
export const GO_TO_PAGE = 'GO_TO_PAGE';
export const RE_SIZE = 'RE_SIZE';

export const FULL = 0;
export const LARGE = 3;
export const MEDIUM = 2;
export const SMALL = 1;

export type CarouselData = {
  data: {
    id: string | number;
    [k: string]: any;
  }[];
  current: number;
  auto: boolean;
  timePlay?: number;
  size?: number;
};

export type CarouselReducerProps = {
  initData?: any[];
  auto?: boolean;
  timePlay?: number;
  size?: number;
  goToPage?: number;
  [k: string]: any;
};

type CarouselContextProviderProps = {
  reducerFunc?: (
    state: CarouselData,
    action: CarouselReducerProps,
  ) => CarouselData;
  children: ReactNode;
};

const CarouselContext = createContext<CarouselData | undefined>(undefined);
const CarouselDispatch = createContext<
  Dispatch<CarouselReducerProps> | undefined
>(undefined);

// Hook
export const useCarouselState = () => {
  const useCarouselContext = useContext(CarouselContext);
  if (!useCarouselContext) {
    throw new Error('Please use useCarousel inside the CarouseProvider');
  }
  return useCarouselContext;
};

export const useCarouselDispatch = () => {
  const useCarouselDispatch = useContext(CarouselDispatch);
  if (!useCarouselDispatch) {
    throw new Error('Please use useCarousel inside the CarouselDispatch');
  }
  return useCarouselDispatch;
};

export const carouselReducerFn = (
  state: CarouselData,
  action: CarouselReducerProps,
) => {
  switch (action.type) {
    case INIT_DATA: {
      if (
        !action.initData ||
        action.auto === null ||
        action.auto === undefined
      ) {
        throw new Error(
          `Action type ${INIT_DATA} must go with initData array and auto boolean`,
        );
      }
      return {
        ...state,
        data: action.initData,
        auto: action.auto,
        size: action.size || FULL,
      };
    }

    case PREVIOUS: {
      const length = state.data.length;
      const size = state.size || FULL;
      const pageCurrent =
        (state.current - 1 + (length - size)) % (length - size);
      return { ...state, current: pageCurrent };
    }

    case NEXT: {
      const length = state.data.length;
      const size = state.size || FULL;
      const pageCurrent = (state.current + 1) % (length - size);
      return { ...state, current: pageCurrent };
    }

    case GO_TO_PAGE: {
      if (action.goToPage === null || action.goToPage === undefined) {
        throw new Error(
          `Action type ${GO_TO_PAGE} must go with page number. Error: ${action.goToPage}`,
        );
      }
      if (action.goToPage < 0 || action.goToPage > state.data.length) {
        throw new Error(
          `Action type ${GO_TO_PAGE} must go with page number more than 0 or less than length data`,
        );
      }
      return { ...state, current: action.goToPage };
    }

    case RE_SIZE: {
      if (action.size === null || action.size === undefined) {
        throw new Error(`Action type ${RE_SIZE} must go with size number`);
      }
      return { ...state, size: action.size, current: 0 };
    }

    default:
      return state;
  }
};

// Provider
export const CarouselContextProvider = ({
  reducerFunc,
  children,
}: CarouselContextProviderProps) => {
  const [state, dispatch] = useReducer(reducerFunc || carouselReducerFn, {
    data: [],
    current: 0,
    auto: false,
    timePlay: 5000,
  });

  return (
    <CarouselContext.Provider value={state}>
      <CarouselDispatch.Provider value={dispatch}>
        {children}
      </CarouselDispatch.Provider>
    </CarouselContext.Provider>
  );
};
