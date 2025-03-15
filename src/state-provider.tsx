import { ReactNode } from 'react';
import { createContext, useReducer } from 'react';
import { AppState, ProviderState } from './types/app-types';
import { appReducer } from './app-reducer';

export const emptyState: AppState = {
  isLoaded: false,
}

export const AppContext = createContext<ProviderState>({ state: emptyState });

export interface StateProviderProps {
  children?: ReactNode | ReactNode[];
  initState?: AppState;
}

export const StateProvider = ({ children, initState = emptyState }: StateProviderProps) => {
  const [state, dispatch] = useReducer(appReducer, {...emptyState, ...initState});

  // reminder:  you can drop a useEffect here to update state

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}


