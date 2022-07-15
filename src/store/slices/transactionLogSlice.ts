import { Transaction } from '../types/Transaction';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TransactionLogState = Transaction[];

const initialState: TransactionLogState = []

const transactionLogSlice = createSlice({
  name: 'transactionLog',
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.push(action.payload)
    }
  }
});

export type {
  TransactionLogState
};
export const { addTransaction } = transactionLogSlice.actions;
export default transactionLogSlice.reducer;
