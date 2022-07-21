import { Account } from '../store/types/Account';
import { AccountTable } from '../components/AccountTable';
import { AppState } from '../store/setupStore';
import { useSelector } from 'react-redux';
import * as React from 'react';

const AccountsList: React.FunctionComponent = () => {
  const accounts = useSelector((state: AppState): Account[] => {
    const randomlyOrderedAccounts = Object.values(state.accounts);
    return randomlyOrderedAccounts.sort((left, right) => left.name.localeCompare(right.name));
  });

  return (
    <div>
      <AccountTable accounts={accounts} />
    </div>
  );
};

export {
  AccountsList as Accounts
};
