import { accountsReducer } from './reducers/accounts';
import { AddTransactionAction } from './actions/AddTransaction';
import { transactionLogReducer } from './reducers/transactionLog';
import { createStore, combineReducers, Dispatch, StateFromReducersMapObject } from 'redux';

const reducers = {
  accounts: accountsReducer,
  transactions: transactionLogReducer
};

const storeFactory = () => {
  return createStore(combineReducers(reducers));
};

type State = StateFromReducersMapObject<typeof reducers>;
type StoreDispatch = Dispatch<AddTransactionAction>;

export type {
  State,
  StoreDispatch
};
export {
  storeFactory
};
