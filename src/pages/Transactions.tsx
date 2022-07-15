import { TransactionForm } from '../components/TransactionForm';
import { TransactionLog } from '../store/reducers/transactionLog';
import { TransactionTable } from "../components/TransactionTable";
import { State } from '../store/store';
import { useSelector } from 'react-redux';
import * as React from 'react';

const Transactions: React.FunctionComponent = () => {
  const transactions = useSelector<State, TransactionLog>((state) => state.transactions);

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
