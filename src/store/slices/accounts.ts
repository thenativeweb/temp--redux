import { Account } from '../types/Account';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AccountsState {
  accounts: Record<string, Account>;
}

const initialState: AccountsState = {
  accounts: {}
};

const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    addAccount: (state, action: PayloadAction<{ accountName: string }>) => {
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
    },
    addBalance: (
      state,
      action: PayloadAction<{ accountName: string; amount: number }>
    ) => {
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
    }
  }
});

const { addAccount, addBalance } = accountsSlice.actions;

export {
  addAccount,
  addBalance
};
export default accountsSlice.reducer;
