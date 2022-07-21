import { addTransaction } from '../store/slices/transactionLog';
import { Dispatch } from '../store/setupStore';
import { useDispatch } from 'react-redux';
import * as React from 'react';
import './TransactionForm.css';

const TransactionForm: React.FunctionComponent = () => {
  const dispatch = useDispatch<Dispatch>();

  const [ fromAccount, setFromAccount ] = React.useState('');
  const [ toAccount, setToAccount ] = React.useState('');
  const [ amount, setAmount ] = React.useState(0);

  const handleFromAccountChange: React.EventHandler<React.ChangeEvent<HTMLInputElement>> = (event) => {
    setFromAccount(event.target.value);
  };
  const handleToAccountChange: React.EventHandler<React.ChangeEvent<HTMLInputElement>> = (event) => {
    setToAccount(event.target.value);
  };
  const handleAmountChange: React.EventHandler<React.ChangeEvent<HTMLInputElement>> = (event) => {
    setAmount(Number(event.target.value));
  }

  const handleFormSubmit: React.EventHandler<React.FormEvent> = (event) => {
    event.preventDefault();
    dispatch(addTransaction({
      transaction: {
        transactionId: '',
        fromAccount,
        toAccount,
        amount
      }
    }));
    setFromAccount('');
    setToAccount('');
    setAmount(0);
  };

  return (
    <form onSubmit={handleFormSubmit} className='transaction-form'>
      <label htmlFor='from-account'>
        From Account:
      </label>
      <input id='from-account' type='text' value={fromAccount} onChange={handleFromAccountChange} />

      <label htmlFor='to-account'>
        To Account:
      </label>
      <input id='to-account' type='text' value={toAccount} onChange={handleToAccountChange} />

      <label htmlFor='amount'>
        Amount (in Cents):
      </label>
      <input id='amount' type='text' value={amount} onChange={handleAmountChange} />

      <button type='submit'>
        Submit
      </button>
    </form>
  );
};

export {
  TransactionForm
};
