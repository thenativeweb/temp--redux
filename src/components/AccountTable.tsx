import { Account } from '../store/types/Account';
import * as React from 'react';
import './AccountTable.css';

interface AccountTableProps {
  accounts: Account[];
}

const AccountTable: React.FunctionComponent<AccountTableProps> = ({ accounts }) => {
  return (
    <table className='account-table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Balance (in €)</th>
        </tr>
      </thead>
      <tbody>
        {accounts.map(account => (<tr key={account.name}>
          <td>{account.name}</td>
          <td className='account-table__balance-cell'>{account.balance / 100}</td>
        </tr>))}
      </tbody>
    </table>
  )
};

export {
  AccountTable
};
