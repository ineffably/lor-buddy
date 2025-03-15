import type { Dispatch } from 'react';
import { LorCard } from './lor-types';

export interface AppState {
  isLoaded?: boolean;
  cardData?: CardData;
}

// add more action types here for new application state opperations
// keeping set card and set filtered distinct for debugability.
export type ActionTypes =
  'SetFilteredCardData' |   
  'SetCardData' |
  'Loaded';

export interface ReducerActions<T = any> {
  payload: T;
  type: ActionTypes;
}

export interface ProviderState<T = any> {
  state: AppState;
  dispatch?: Dispatch<ReducerActions<T>>;
}

export interface CardData {
  allCardData: LorCard[];
  filteredCardData: LorCard[];
}
