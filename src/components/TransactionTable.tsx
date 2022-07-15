import { CurrencyConvertedAmount } from '../store/types/CurrencyConvertedAmount';
import { Transaction } from '../store/types/Transaction';
import * as React from 'react';
import './TransactionTable.css';

interface TransactionTableProps {
  transactions: (Transaction & { convertedAmount: CurrencyConvertedAmount })[];
  currencies: string[];
}

const TransactionTable: React.FunctionComponent<TransactionTableProps> = ({ transactions, currencies }) => {
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
          {currencies.map(currencyName => (<th key={currencyName}>
            Amount (in {currencyName})
          </th>))}
        </tr>
      </thead>
      <tbody>
      {transactions.map((transaction, index) => (<tr key={index}>
        <td>{ transaction.fromAccount }</td>
        <td>{ transaction.toAccount }</td>
        <td className='transaction-table__amount-cell'>{ transaction.amount / 100 }</td>
        {currencies.map(currencyName => (<td key={`${index}-${currencyName}`} className='transaction-table__amount-cell'>
          { transaction.convertedAmount[currencyName] / 100 }
        </td>))}
      </tr>))}
      </tbody>
    </table>
  )
};

export {
  TransactionTable
};
