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
      // TODO: Compute the new state.
      return state;
    });
  }
});

export default accountsSlice.reducer;
