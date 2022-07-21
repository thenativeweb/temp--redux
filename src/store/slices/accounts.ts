import { Account } from '../types/Account';
import { ActionType, createAction, createReducer } from 'typesafe-actions';

interface AccountsState {
  accounts: Record<string, Account>;
}

const initialState: AccountsState = {
  accounts: {}
};

const addAccount = createAction('accounts/ADD_ACCOUNT')<{ accountName: string }>();
const addBalance = createAction('accounts/ADD_BALANCE')<{ accountName: string; amount: number }>();

const actions = {
  addAccount,
  addBalance
};

type AccountsAction = ActionType<typeof actions>

const accountsReducer = createReducer<AccountsState, AccountsAction>(initialState)
  .handleAction(addAccount,  (state, action) => {
    const { accountName } = action.payload;
  
    if (state.accounts[accountName] !== undefined) {
      return state;
    }
  
    const newAccountsState = {
      ...state.accounts,
      [accountName]: {
        name: accountName,
        balance: 0
      }
    };
  
    return {
      ...state,
      accounts: newAccountsState
    };
  })
  .handleAction(addBalance, (state, action) => {
    const { accountName, amount } = action.payload;

      if (state.accounts[accountName] === undefined) {
        return state;
      }

      const newAccountsState = {
        ...state.accounts,
        [accountName]: {
          name: accountName,
          balance: state.accounts[accountName].balance + amount
        }
      };

      return {
        ...state,
        accounts: newAccountsState
      };
  });

export {
  addAccount,
  addBalance
};
export default accountsReducer;
export type {
  AccountsAction
};
