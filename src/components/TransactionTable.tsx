import { TransactionLog } from '../store/reducers/transactionLog';
import * as React from 'react';
import './TransactionTable.css';

interface TransactionTableProps {
  transactions: TransactionLog;
}

const TransactionTable: React.FunctionComponent<TransactionTableProps> = ({ transactions }) => {
  return (
    <table className='transaction-table'>
      <thead>
      <th>
        From Account
      </th>
      <th>
        To Account
      </th>
      <th>
        Amount (in €)
      </th>
      </thead>
      <tbody>
      {transactions.map((transaction, index) => (<tr key={index}>
        <td>{ transaction.fromAccount }</td>
        <td>{ transaction.toAccount }</td>
        <td>{ transaction.amount / 100 }</td>
      </tr>))}
      </tbody>
    </table>
  )
};

export {
  TransactionTable
};
