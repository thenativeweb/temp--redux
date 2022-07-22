import { waitFor } from '@testing-library/react';
import { setupStore } from '../../setupStore';
import { Currency } from '../../types/Currency';
import { Transaction } from '../../types/Transaction';
import { addTransactionEpicAction } from './actions';

describe('addTransactionAsync', () => {
  it('adds a transaction to the transaction log.', async () => {
    const mockedFetch = async () => ({
      json: async () => ({
        rates: {
          [Currency.EUR]: 2,
        },
      })
    });

    const store = setupStore({
      dependencies: {
        fetch: mockedFetch as any
      },
    });

    const transaction: Transaction = {
      transactionId: 'test',
      fromAccount: 'B',
      toAccount: 'C',
      amount: 3,
    };
    const currency = Currency.USD;

    store.dispatch(addTransactionEpicAction.request({
      transaction,
      currency,
    }) as any);

    await waitFor(() => {
      const state = store.getState();
      expect(state.transactionLog.transactions.length).toBe(1);
      // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
      expect(state.transactionLog.transactions[0]).toEqual({
        ...transaction,
        amount: 6,
      });
    });
  });
});
