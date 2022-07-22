import { applyMiddleware, combineReducers, createStore } from 'redux';
import { AddTransactionEpicAction } from './epic/addTransaction/actions';
import accounts, { AccountsAction } from './slices/accounts';
import transactionLog, { TransactionLogAction } from './slices/transactionLog';
import type { Dispatch as ReduxDispatch } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './epic/rootEpic';

interface Dependencies {
  fetch: typeof fetch;
}

const setupStore = function (args: {
  preloadedState?: any;
  dependencies: Dependencies;
}) {
  const epicMiddleware = createEpicMiddleware({
    dependencies: args.dependencies
  });

  const store = createStore(
    combineReducers({
      accounts,
      transactionLog
    }),
    args.preloadedState ?? {},
    applyMiddleware(epicMiddleware)
  );

  epicMiddleware.run(rootEpic as any);

  return store;
}

type RootAction = TransactionLogAction | AccountsAction | AddTransactionEpicAction;
type AppStore = ReturnType<typeof setupStore>;
type AppState = ReturnType<AppStore['getState']>;
type Dispatch = ReduxDispatch<RootAction>;

export type {
  RootAction,
  AppStore,
  AppState,
  Dispatch
}
export {
  setupStore
};
