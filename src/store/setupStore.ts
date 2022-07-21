import accounts from './slices/accounts';
import { configureStore } from '@reduxjs/toolkit';
import transactionLog from './slices/transactionLog';

const setupStore = function () {
  return configureStore({
    reducer: {
      accounts,
      transactionLog
    }
  });
}

type AppStore = ReturnType<typeof setupStore>;
type AppState = ReturnType<AppStore['getState']>;
type Dispatch = AppStore['dispatch'];

export type {
  AppStore,
  AppState,
  Dispatch
}
export {
  setupStore
};
