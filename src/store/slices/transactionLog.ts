import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Transaction } from '../types/Transaction';

interface TransactionLogState {
  transactions: Transaction[];
}

const initialState: TransactionLogState = {
  transactions: []
};

const transactionLogSlice = createSlice({
  name: 'transactionLog',
  initialState,
  reducers: {
    addTransaction: (
      state,
      action: PayloadAction<{ transaction: Transaction }>
    ) => {
      return {
        transactions: [ ...state.transactions, action.payload.transaction ]
      };
    }
  }
});

const {
  addTransaction
} = transactionLogSlice.actions;

export {
  addTransaction
};
export default transactionLogSlice.reducer;
