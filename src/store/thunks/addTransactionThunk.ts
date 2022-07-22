import {addTransaction} from '../slices/transactionLog';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {Transaction} from '../types/Transaction';
import {addAccount, addBalance} from '../slices/accounts';
import {Currency} from "../types/Currency";

const addTransactionThunk = createAsyncThunk(
  'addTransactionThunk',
  async (args: {
    transaction: Transaction;
    currency: Currency;
    fetch: typeof fetch,
  }, thunkAPI) => {
    const { transactionId, fromAccount, toAccount, amount } = args.transaction;

    let currencyConvertedAmount = amount;
    if (args.currency !== Currency.EUR) {
      const response = await args.fetch(
        `https://api.frankfurter.app/latest?from=${args.currency}&to=${Currency.EUR}`
      );
      const responseBody = await response.json();
      currencyConvertedAmount = Math.round(amount * responseBody.rates[Currency.EUR]);
    }

    thunkAPI.dispatch(addTransaction({
      transaction: {
        transactionId,
        fromAccount,
        toAccount,
        amount: currencyConvertedAmount
      }
    }));

    thunkAPI.dispatch(addAccount({ accountName: fromAccount }));
    thunkAPI.dispatch(addBalance({ accountName: fromAccount, amount: -currencyConvertedAmount }));
    thunkAPI.dispatch(addAccount({ accountName: toAccount }));
    thunkAPI.dispatch(addBalance({ accountName: toAccount, amount: currencyConvertedAmount }));
  }
);

export {
  addTransactionThunk
};
