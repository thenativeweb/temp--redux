import * as React from 'react';
import { Transaction } from '../store/types/Transaction';
import './TransactionTable.css';

interface TransactionTableProps {
  transactions: Transaction[];
}

const TransactionTable: React.FunctionComponent<TransactionTableProps> = ({ transactions }) => {
  return (
    <table className='transaction-table'>
      <thead>
        <tr>
          <th>
            From Account
          </th>
          <th>
            To Account
          </th>
          <th>
            Amount (in €)
          </th>
        </tr>
      </thead>
      <tbody>
      {transactions.map((transaction, index) => (<tr key={index}>
        <td>{ transaction.fromAccount }</td>
        <td>{ transaction.toAccount }</td>
        <td className='transaction-table__amount-cell'>{ transaction.amount / 100 }</td>
      </tr>))}
      </tbody>
    </table>
  )
};

export {
  TransactionTable
};
