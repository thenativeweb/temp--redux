import transactionLogReducer, { TransactionLogState, addTransaction } from './transactionLogSlice';

describe('transaction log slice', (): void => {
  it('appends transactions to the log.', async (): Promise<void> => {
    const state: TransactionLogState = [];

    const newState = transactionLogReducer(
      state,
      addTransaction({
        fromAccount: 'revenue:Salary',
        toAccount: 'assets:Cash',
        amount: 133700
      })
    );

    expect(newState).toEqual([
      { fromAccount: 'revenue:Salary', toAccount: 'assets:Cash', amount: 133700 }
    ]);
  });

  it('appends transactions to the end of the log.', async (): Promise<void> => {
    const state: TransactionLogState = [
      { fromAccount: 'revenue:Salary', toAccount: 'assets:Cash', amount: 133700 }
    ];

    const newState = transactionLogReducer(
      state,
      addTransaction({
        fromAccount: 'assets:Cash',
        toAccount: 'expenses:Vacation',
        amount: 45000
      })
    );

    expect(newState).toEqual([
      { fromAccount: 'revenue:Salary', toAccount: 'assets:Cash', amount: 133700 },
      { fromAccount: 'assets:Cash', toAccount: 'expenses:Vacation', amount: 45000 }
    ])
  });
});
