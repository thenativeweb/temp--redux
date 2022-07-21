import { Action, createStore } from 'redux';
import { addTransaction, revokeTransaction, transactionLogReducer } from './slices/transactionLog';
import { Transaction } from './types/Transaction';

interface AppState {
  transactions: Transaction[];
}

const initialState: AppState = {
  transactions: []
};

const rootReducer = function (
  state: AppState = initialState,
  action: Action
): AppState {
  if (action.type.startsWith('transactionLog/')) {
    return transactionLogReducer(state, action as any);
  } else {
    return state;
  }
}

const setupStore = function () {
  return createStore(rootReducer);
}

type AppStore = ReturnType<typeof setupStore>;
type Dispatch = AppStore['dispatch'];

export type {
  AppStore,
  AppState,
  Dispatch
}
export {
  setupStore,
  addTransaction,
  revokeTransaction,
};
