import type { Dispatch } from 'react';
import { LorCard } from './lor-types';
import { QueryMonster } from '../utils/query-cards';
export interface AppState {
    isLoaded?: boolean;
    cardData?: CardData;
    query?: QueryMonster;
    cardReport?: LorCardsDataReport;
    filteredReport?: LorCardsDataReport;
}
export interface CardData {
    allCardData: LorCard[];
    filteredCardData: LorCard[];
}
export interface LorCardsDataReport {
    cardsByCode: Record<keyof LorCard, LorCard>;
    codesBy: Record<keyof LorCard, Record<string, string[]>>;
    allOf: Record<keyof LorCard, string[]>;
}
export type ActionTypes = 'SetFilteredCardData' | 'SetCardData' | 'Loaded';
export interface ReducerActions<T = any> {
    payload: T;
    type: ActionTypes;
}
export interface ProviderState<T = any> {
    state: AppState;
    dispatch?: Dispatch<ReducerActions<T>>;
}
