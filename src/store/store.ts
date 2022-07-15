import { TransactionAction, transactionLogReducer } from "./reducers/transactionLog";
import { createStore, combineReducers, Dispatch, StateFromReducersMapObject } from 'redux';

const reducers = {
  transactions: transactionLogReducer
};

const storeFactory = () => {
  return createStore(combineReducers(reducers));
};

type State = StateFromReducersMapObject<typeof reducers>;
type StoreDispatch = Dispatch<TransactionAction>;

export type {
  State,
  StoreDispatch
};
export {
  storeFactory
};
