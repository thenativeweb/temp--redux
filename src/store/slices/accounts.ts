import { Account } from '../types/Account';
import { createSlice } from '@reduxjs/toolkit';
import { addTransaction } from './transactionLog';

interface AccountsState {
  accounts: Record<string, Account>;
}

const initialState: AccountsState = {
  accounts: {}
};

const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addTransaction, (state, action) => {
      const { fromAccount, toAccount, amount } = action.payload.transaction

      const currentFromAccountBalance = state.accounts[fromAccount]?.balance ?? 0;
      const currentToAccountBalance = state.accounts[toAccount]?.balance ?? 0;

      const newAccounts = {
        ...state.accounts,
        [fromAccount]: {
          name: fromAccount,
          balance: currentFromAccountBalance - amount
        },
        [toAccount]: {
          name: toAccount,
          balance: currentToAccountBalance + amount
        }
      };

      return {
        ...state,
        newAccounts
      };
    });
  }
});

export default accountsSlice.reducer;
