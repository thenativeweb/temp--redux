import { createAsyncThunk } from '@reduxjs/toolkit';
import { Currency } from '../../utils/Currency';
import { State, StoreDispatch } from '../store';
import { Transaction } from '../types/Transaction';
import { addTransaction } from './transactionLogSlice';

const addTransactionInCurrency = createAsyncThunk<
  void,
  { transaction: Transaction; currency: Currency; },
  {
    state: State;
    dispatch: StoreDispatch;
  }
>(
  'transactionLog/addTransactionInCurrency',
  async (thunkArgs, thunkApi) => {
    const { dispatch } = thunkApi;
    const { transaction, currency } = thunkArgs;

    const response = await fetch(
      `https://api.frankfurter.app/latest?from=${currency}&to=${Currency.EUR}`
    );
    const { rates } = await response.json();
    const amountInEuros = Math.round(transaction.amount * rates[Currency.EUR]);

    dispatch(addTransaction({
      ...transaction,
      amount: amountInEuros
    }));
  }
);

export {
  addTransactionInCurrency
};
