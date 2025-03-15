import type { AppState, ReducerActions } from "./types/app-types";

const persistState = (state: AppState) => {
  // this allows us to persist selected state values to local storage
  // or other opperations that we might want to do when the state changes
  // putLocalData('app-prototype', state);
  return state;
}

export const appReducer = (
  lastState: AppState,
  action: ReducerActions
): AppState => {
  const { payload, type } = action;

  // console.info('==> appReducer:', type, payload);

  switch (type) {
    case 'Loaded':
      const { isLoaded } = payload;
      return persistState({
        ...lastState,
        ...{ isLoaded }
      });
    case 'SetCardData':
      const { cardData } = payload;
      return persistState({
        ...lastState,
        ...{ cardData }
      });
    case 'SetFilteredCardData':
      const { filteredCardData } = payload;
      return persistState({
        ...lastState,
        cardData: {
          ...lastState.cardData, ...{ filteredCardData }
        },
      });

    default: {
      // we should warn if we get here as we don't have a handler for the payload type
      console.warn('StoreReducer: type not handled', type);
      console.warn('StoreReducer: payload', payload);
      return persistState({ ...lastState });
    }
  }
}
