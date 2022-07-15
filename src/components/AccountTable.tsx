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
        <th>Name</th>
        <th>Balance (in €)</th>
      </thead>
      <tbody>
        {accounts.map(account => (<tr>
          <td>{account.name}</td>
          <td>{account.balance / 100}</td>
        </tr>))}
      </tbody>
    </table>
  )
};

export {
  AccountTable
};
