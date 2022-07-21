import { AppState } from '../setupStore';
import { Transaction } from '../types/Transaction';

interface AddTransactionAction {
  type: 'transactionLog/ADD_TRANSACTION';
  payload: {
    transaction: Transaction;
  };
}

interface RevokeTransactionAction {
  type: 'transactionLog/REVOKE_TRANSACTION',
  payload: {
    transactionId: string;
  };
}

const addTransaction = (payload: AddTransactionAction['payload']): AddTransactionAction => ({
  type: 'transactionLog/ADD_TRANSACTION',
  payload
});

const revokeTransaction = (payload: RevokeTransactionAction['payload']): RevokeTransactionAction => ({
  type: 'transactionLog/REVOKE_TRANSACTION',
  payload
});

const transactionLogReducer = (state: AppState, action: AddTransactionAction | RevokeTransactionAction): AppState => {
  switch (action.type) {
    case 'transactionLog/ADD_TRANSACTION':
      return {
        transactions: [ ...state.transactions, action.payload.transaction ]
      };

    case 'transactionLog/REVOKE_TRANSACTION':
      const { transactionId } = action.payload;

      return {
        transactions: state.transactions.filter(
          transaction => transaction.transactionId !== transactionId
        )
      };
  }
};

export {
  addTransaction,
  revokeTransaction,
  transactionLogReducer,
};
