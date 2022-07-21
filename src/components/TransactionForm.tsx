import { Dispatch } from '../store/setupStore';
import { useDispatch } from 'react-redux';
import * as React from 'react';
import './TransactionForm.css';

const TransactionForm: React.FunctionComponent = () => {
  const dispatch = useDispatch<Dispatch>();

  const fromAccount = '';
  const toAccount = '';
  const amount = 0;
  const handleSubmit = () => {};
  const handleFromAccountChange = () => {};
  const handleToAccountChange = () => {};
  const handleAmountChange = () => {};

  return (
    <form onSubmit={handleSubmit} className='transaction-form'>
      <label htmlFor='from-account'>
        From Account:
      </label>
      <input name='from-account' type='text' value={fromAccount} onChange={handleFromAccountChange} />

      <label htmlFor='to-account'>
        To Account:
      </label>
      <input name='to-account' type='text' value={toAccount} onChange={handleToAccountChange} />

      <label htmlFor='amount'>
        Amount (in Cents):
      </label>
      <input name='amount' type='number' value={amount} onChange={handleAmountChange} />

      <button type='submit'>
        Submit
      </button>
    </form>
  );
};

export {
  TransactionForm
};
