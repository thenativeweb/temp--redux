import { Provider } from 'react-redux';
import { fireEvent, render, screen } from '@testing-library/react';
import { setupStore } from '../store/store';
import { TransactionForm } from './TransactionForm';

describe('TransactionForm', (): void => {
  it('dispatches an addTransaction action containing the form data on submit.', async (): Promise<void> => {
    const store = setupStore();

    render(<Provider store={store}>
      <TransactionForm />
    </Provider>);

    const fromAccountInput = screen.getByLabelText<HTMLInputElement>('From Account:');
    fromAccountInput.value = 'revenue:Salary';
    const toAccountInput = screen.getByLabelText<HTMLInputElement>('To Account:');
    toAccountInput.value = 'assets:Cash';
    const amountInput = screen.getByLabelText<HTMLInputElement>(/Amount/u);
    amountInput.value = '133700';
    fireEvent(
      screen.getByText('Submit'),
      new MouseEvent('click')
    );

    expect(store.getState().transactions).toEqual([
      { fromAccount: 'revenue:Salary', toAccount: 'assets:Cash', amount: 133700 }
    ]);
  });
})
