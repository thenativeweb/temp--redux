import { addTransaction } from './transactionLogSlice';
import accountsReducer, { AccountsState } from './accountsSlice';

describe('accounts reducer', (): void => {
  it('adds newly seen accounts to the state.', async (): Promise<void> => {
    const state: AccountsState = {};
    const action = addTransaction({
      fromAccount: 'assets:Cash',
      toAccount: 'expenses:Groceries',
      amount: 1549
    });

    const newState = accountsReducer(state, action);

    expect(newState).toEqual({
      'assets:Cash': {
        name: 'assets:Cash',
        balance: -1549
      },
      'expenses:Groceries': {
        name: 'expenses:Groceries',
        balance: 1549
      }
    });
  });

  it(`calculates the accounts' balance across multiple actions.`, async (): Promise<void> => {
    const state: AccountsState = {};

    const secondState = accountsReducer(
      state,
      addTransaction({
        fromAccount: 'revenue:Salary',
        toAccount: 'assets:Cash',
        amount: 133700
      })
    );
    const thirdState = accountsReducer(
      secondState,
      addTransaction({
        fromAccount: 'assets:Cash',
        toAccount: 'expenses:Groceries',
        amount: 1549
      })
    );
    const finalState = accountsReducer(
      thirdState,
      addTransaction({
        fromAccount: 'assets:Cash',
        toAccount: 'expenses:IT',
        amount: 4257
      })
    );

    expect(finalState['assets:Cash']).toEqual({
      name: 'assets:Cash',
      balance: 127894
    });
  });
});
