import { Account } from '../types/Account';
import { createSlice } from "@reduxjs/toolkit";
import { addTransaction } from './transactionLogSlice';

type AccountsState = Record<string, Account>;

const initialState: AccountsState = {};

const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addTransaction, (state, action) => {
      const { fromAccount: fromAccountName, toAccount: toAccountName } = action.payload;

      const fromAccount = state[fromAccountName] ?? { name: fromAccountName, balance: 0 };
      fromAccount.balance -= action.payload.amount;
      state[fromAccountName] = fromAccount;

      const toAccount = state[toAccountName] ?? { name: toAccountName, balance: 0 };
      toAccount.balance += action.payload.amount;
      state[toAccountName] = toAccount;
    });
  }
});

export type {
  AccountsState
};
export default accountsSlice.reducer;
