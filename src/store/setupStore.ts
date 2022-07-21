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
  return {
    transactions: [ ...state.transactions, action.payload.transaction ]
  }
}

const setupStore = function () {
  return createStore(transactionLogReducer);
}

export {
  setupStore
};
