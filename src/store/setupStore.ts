import accounts from './slices/accounts';
import { CombinedState, configureStore, PreloadedState } from '@reduxjs/toolkit';
import transactionLog from './slices/transactionLog';

const setupStore = function (preloadedState?: any) {
  return configureStore({
    reducer: {
      accounts,
      transactionLog
    },
    devTools: true,
    preloadedState,
  });
};

type AppStore = ReturnType<typeof setupStore>;
type AppState = ReturnType<AppStore['getState']>;
type Dispatch = AppStore['dispatch'];

export type {
  AppStore,
  AppState,
  Dispatch
};
export {
  setupStore
};
