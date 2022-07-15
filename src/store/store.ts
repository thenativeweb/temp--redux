import accountsReducer from './slices/accountsSlice';
import { configureStore } from '@reduxjs/toolkit';
import transactionLogReducer from './slices/transactionLogSlice';

const store = configureStore({
  reducer: {
    accounts: accountsReducer,
    transactions: transactionLogReducer
  }
});

type State = ReturnType<typeof store.getState>;
type StoreDispatch = typeof store.dispatch;

export type {
  State,
  StoreDispatch
};
export {
  store
};
