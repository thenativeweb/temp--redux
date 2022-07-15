import { Account } from '../store/types/Account';
import { State } from '../store/store';
import { useSelector } from 'react-redux';
import * as React from 'react';
import {AccountTable} from "../components/AccountTable";

const AccountsList: React.FunctionComponent = () => {
  const accounts = useSelector<State, Account[]>(state => {
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
