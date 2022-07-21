import { ActionType, createAsyncAction } from 'typesafe-actions';
import { Currency } from '../../types/Currency';
import { Transaction } from '../../types/Transaction';

const addTransactionEpicAction = createAsyncAction(
  'ADD_TRANSACTION_EPIC_REQUEST',
  'ADD_TRANSACTION_EPIC_SUCCESS',
  'ADD_TRANSACTION_EPIC_FAILURE',
)<
  {
    transaction: Transaction;
    currency: Currency
  },
  void,
  Error
>();

type AddTransactionEpicAction = ActionType<typeof addTransactionEpicAction>;

export {
  addTransactionEpicAction
};
export type {
  AddTransactionEpicAction
};
