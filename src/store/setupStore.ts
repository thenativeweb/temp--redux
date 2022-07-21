import { createStore, Action } from 'redux';

interface Transaction {
  fromAccount: string;
  toAccount: string;
  amount: number;
}

interface AddTransactionAction {
  type: 'ADD_TRANSACTION';
  payload: {
    transaction: Transaction;
  }
}

interface TransactionLogState {
  transactions: Transaction[];
}

const initialState: TransactionLogState = {
  transactions: []
};

const transactionLogReducer = function (
  state: TransactionLogState = initialState,
  action: AddTransactionAction
): TransactionLogState {
  switch (action.type) {
    case 'ADD_TRANSACTION': {
      return {
        transactions: [ ...state.transactions, action.payload.transaction ]
      }
    }
    default: {
      return state;
    }
  }
}

const setupStore = function () {
  return createStore(transactionLogReducer);
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
