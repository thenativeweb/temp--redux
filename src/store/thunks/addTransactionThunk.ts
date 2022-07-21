import { addTransaction } from '../slices/transactionLog';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Transaction } from '../types/Transaction';
import { addAccount, addBalance } from '../slices/accounts';

const addTransactionThunk = createAsyncThunk(
  'addTransactionThunk',
  async ({ transaction }: { transaction: Transaction }, thunkAPI) => {
    const { fromAccount, toAccount, amount } = transaction;

    thunkAPI.dispatch(addTransaction({
      transaction: {
        transactionId: '',
        fromAccount,
        toAccount,
        amount
      }
    }));

    thunkAPI.dispatch(addAccount({ accountName: fromAccount }));
    thunkAPI.dispatch(addBalance({ accountName: fromAccount, amount: -amount }));
    thunkAPI.dispatch(addAccount({ accountName: toAccount }));
    thunkAPI.dispatch(addBalance({ accountName: toAccount, amount }));
  }
);

export {
  addTransactionThunk
};
