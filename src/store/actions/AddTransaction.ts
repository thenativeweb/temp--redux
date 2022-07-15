import { Action } from 'redux';
import { Transaction } from '../types/Transaction';

interface AddTransactionAction extends Action<'ADD_TRANSACTION'> {
  transaction: Transaction;
}

const addTransaction = ({ fromAccount, toAccount, amount }: {
  fromAccount: string;
  toAccount: string;
  amount: number;
}): AddTransactionAction => {
  return {
    type: 'ADD_TRANSACTION',
    transaction: {
      fromAccount,
      toAccount,
      amount
    }
  }
}

export type {
  AddTransactionAction
};
export {
  addTransaction
};
