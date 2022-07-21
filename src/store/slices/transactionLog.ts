import { ActionType, createAction, createReducer } from 'typesafe-actions';
import { Transaction } from '../types/Transaction';

interface TransactionLogState {
  transactions: Transaction[];
}

const initialState: TransactionLogState = {
  transactions: []
};

const addTransaction = createAction('transactionLog/addTransaction')<{ transaction: Transaction }>();

const actions = {
  addTransaction
};

type TransactionLogAction = ActionType<typeof actions>;

const transactionLogReducer = createReducer<TransactionLogState, TransactionLogAction>(initialState)
  .handleAction(addTransaction, (state, action) => {
    return {
      transactions: [ ...state.transactions, action.payload.transaction ]
    };
  });

export {
  addTransaction
};
export default transactionLogReducer;
export type {
  TransactionLogAction
};
