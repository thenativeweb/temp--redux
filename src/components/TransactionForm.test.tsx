import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { act, render, screen } from '@testing-library/react';
import { setupStore } from '../store/store';
import { TransactionForm } from './TransactionForm';

describe('TransactionForm', (): void => {
  it('dispatches an addTransaction action containing the form data on submit.', async (): Promise<void> => {
    const store = setupStore();

    act(() => {
      render(<Provider store={store}>
        <TransactionForm />
      </Provider>);
    })

    act(() => {
      const fromAccountInput = screen.getByLabelText<HTMLInputElement>('From Account:');
      userEvent.type(fromAccountInput, 'revenue:Salary');

      const toAccountInput = screen.getByLabelText<HTMLInputElement>('To Account:');
      userEvent.type(toAccountInput, 'assets:Cash');

      const amountInput = screen.getByLabelText<HTMLInputElement>(/Amount/u);
      userEvent.type(amountInput, '133700');
    });

    act(() => {
      userEvent.click(screen.getByText('Submit'));
    });

    expect(store.getState().transactions).toEqual([
      { fromAccount: 'revenue:Salary', toAccount: 'assets:Cash', amount: 133700 }
    ]);
  });
})
