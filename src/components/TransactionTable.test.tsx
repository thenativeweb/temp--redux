import { TransactionTable } from './TransactionTable';
import { TransactionWithConvertedAmounts } from '../store/types/TransactionWithConvertedAmounts';
import { cleanup, render } from '@testing-library/react';

afterEach(cleanup);

describe('TransactionTable', (): void => {
  it('renders a row for each transaction.', async (): Promise<void> => {
    const transactions: TransactionWithConvertedAmounts[] = [
      { fromAccount: 'revenue:Salary', toAccount: 'assets:Cash', amount: 133700, convertedAmount: {} },
      { fromAccount: 'assets:Cash', toAccount: 'expenses:Cinema', amount: 1800, convertedAmount: {} }
    ];

    const { container} = render(
      <TransactionTable transactions={transactions} />
    )

    // One more than transactions, since the header is also a tr.
    expect(container.querySelectorAll('tr').length).toBe(3);
  });
})
