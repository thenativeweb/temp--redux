import { createStore, Action } from 'redux';

interface Transaction {
  transactionId: string;
  fromAccount: string;
  toAccount: string;
  amount: number;
}

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

interface TransactionLogState {
  transactions: Transaction[];
}

const initialState: TransactionLogState = {
  transactions: []
};


const transactionLogReducer = (state: TransactionLogState, action: AddTransactionAction | RevokeTransactionAction): TransactionLogState => {
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
}

const rootReducer = function (
  state: TransactionLogState = initialState,
  action: AddTransactionAction | RevokeTransactionAction
): TransactionLogState {
  if (action.type.startsWith('transactionLog/')) {
    return transactionLogReducer(state, action);
  } else {
    return state;
  }
}

const setupStore = function () {
  return createStore(rootReducer);
}

type AppStore = ReturnType<typeof setupStore>;
type AppState = ReturnType<AppStore['getState']>;
type Dispatch = AppStore['dispatch'];

export type {
  AppStore,
  AppState,
  Dispatch
}
export {
  setupStore,
  addTransaction,
  revokeTransaction,
};
