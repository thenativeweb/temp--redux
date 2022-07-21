import { addTransaction } from './slices/transactionLog';
import { Dispatch } from './setupStore';
import { Transaction } from './types/Transaction';
import { addAccount, addBalance } from './slices/accounts';

const addTransactionWorkflow = function ({ transaction, dispatch }: {
  transaction: Transaction;
  dispatch: Dispatch;
}) {
  const { fromAccount, toAccount, amount } = transaction;

  dispatch(addTransaction({
    transaction: {
      transactionId: '',
      fromAccount,
      toAccount,
      amount
    }
  }));

  dispatch(addAccount({ accountName: fromAccount }));
  dispatch(addBalance({ accountName: fromAccount, amount: -amount }));
  dispatch(addAccount({ accountName: toAccount }));
  dispatch(addBalance({ accountName: toAccount, amount }));
};

export {
  addTransactionWorkflow
};
