import * as React from 'react';
import { useSelector } from 'react-redux';
import { TransactionForm } from '../components/TransactionForm';
import { TransactionTable } from '../components/TransactionTable';
import { State } from '../store/store';

const Transactions: React.FunctionComponent = () => {
  const { transactions } = useSelector((state: State) => state);

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
