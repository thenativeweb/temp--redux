import { AppState } from '../store/setupStore';
import { TransactionForm } from '../components/TransactionForm';
import { TransactionTable } from '../components/TransactionTable';
import { useSelector } from 'react-redux';
import * as React from 'react';

const Transactions: React.FunctionComponent = () => {
  const transactions = useSelector((state: AppState) => state.transactionLog.transactions);

  return (
    <div>
      <TransactionForm />
      <TransactionTable transactions={transactions} />
    </div>
  );
};

export {
  Transactions
};
