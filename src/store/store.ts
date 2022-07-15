import accountsReducer from './slices/accountsSlice';
import currencyReducer from './slices/currenciesSlice';
import transactionLogReducer from './slices/transactionLogSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  accounts: accountsReducer,
  currencies: currencyReducer,
  transactions: transactionLogReducer
});

const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  });
}

type State = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>;
type StoreDispatch = AppStore['dispatch'];

export type {
  State,
  StoreDispatch
};
export {
  setupStore
};
