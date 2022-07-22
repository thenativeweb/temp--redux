import { setupStore } from '../setupStore';
import { Currency } from '../types/Currency';
import { Transaction } from '../types/Transaction';
import { addTransactionThunk } from './addTransactionThunk';

describe('addTransactionThunk', () => {
  it('adds a transaction to the transaction log.', async () => {
    const store = setupStore();

    const transaction: Transaction = {
      transactionId: 'test',
      fromAccount: 'A',
      toAccount: 'B',
      amount: 3,
    };
    const currency = Currency.USD;

    await store.dispatch(addTransactionThunk({
      transaction,
      currency,
      fetch: async () => ({
        json: async () => ({
          rates: {
            [Currency.EUR]: 2
          }
        })
      }) as any
    }));

    const state = store.getState();

    expect(state.transactionLog.transactions.length).toBe(1);
    expect(state.transactionLog.transactions[0]).toEqual({
      ...transaction,
      amount: 6
    });
  });
});
