import { AddTransactionAction } from '../actions/AddTransaction';
import { Reducer } from 'redux';
import { Transaction } from '../types/Transaction';

type TransactionLog = Transaction[];

const transactionLogReducer: Reducer<TransactionLog, AddTransactionAction> = (state=[], action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION': {
      return [ ...state, action.transaction ];
    }
    default: {
      return state;
    }
  }
};

export type {
  Transaction,
  TransactionLog
};
export {
  transactionLogReducer
};
