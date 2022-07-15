import { Action, ActionCreator, Reducer } from 'redux';

interface Transaction {
  fromAccount: string;
  toAccount: string;
  amount: number;
}

interface TransactionAction extends Action<'ADD_TRANSACTION'> {
  transaction: Transaction;
}

type TransactionLog = Transaction[];

const addTransaction = ({ fromAccount, toAccount, amount }: {
  fromAccount: string;
  toAccount: string;
  amount: number;
}): TransactionAction => {
  return {
    type: 'ADD_TRANSACTION',
    transaction: {
      fromAccount,
      toAccount,
      amount
    }
  }
}

const transactionLogReducer: Reducer<TransactionLog, TransactionAction> = (state=[], action) => {
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
  TransactionAction,
  TransactionLog
};
export {
  addTransaction,
  transactionLogReducer
};
