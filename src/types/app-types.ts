import type { Dispatch } from 'react';
import { LorCard } from './lor-types';
import { QueryMonster } from '../utils/query-cards';

export interface AppState {
  isLoaded?: boolean;
  cardData?: CardData;
  query?: QueryMonster;
  cardReport?: LorCardDataReport;
  filteredReport?: LorCardDataReport;
}

export interface CardData {
  allCardData: LorCard[];
  filteredCardData: LorCard[];
}

export interface LorCardDataReport {
  allCards: LorCard[];
  cardsByCardCode: Record<string, LorCard>;
  indexedByKeywords: Record<string, LorCard[]>;
  indexedByRegion: Record<string, LorCard[]>;
  indexedByType: Record<string, LorCard[]>;
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


