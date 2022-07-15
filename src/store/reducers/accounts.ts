import { Account } from '../types/Account';
import { AddTransactionAction } from '../actions/AddTransaction';
import { Reducer } from 'redux';

type Accounts = Record<string, Account>;

const accountsReducer: Reducer<Accounts, AddTransactionAction> = (state={}, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION": {
      const { fromAccount: fromAccountName, toAccount: toAccountName } = action.transaction;

      const fromAccount = state[fromAccountName] ?? { name: fromAccountName, balance: 0 };
      fromAccount.balance -= action.transaction.amount;

      const toAccount = state[toAccountName] ?? { name: toAccountName, balance: 0 };
      toAccount.balance += action.transaction.amount;

      return {
        ...state,
        [fromAccountName]: fromAccount,
        [toAccountName]: toAccount
      };
    }
    default: {
      return state;
    }
  }
};

export type {
  Accounts
};
export {
  accountsReducer
};
