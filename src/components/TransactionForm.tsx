import { Dispatch } from '../store/setupStore';
import { useDispatch } from 'react-redux';
import * as React from 'react';
import './TransactionForm.css';
import { addTransactionThunk } from '../store/thunks/addTransactionThunk'
import {Currency} from "../store/types/Currency";

const TransactionForm: React.FunctionComponent = () => {
  const dispatch = useDispatch<Dispatch>();

  const [ fromAccount, setFromAccount ] = React.useState('');
  const [ toAccount, setToAccount ] = React.useState('');
  const [ amount, setAmount ] = React.useState(0);
  const [ currency, setCurrency ] = React.useState(Currency.EUR);

  const handleFromAccountChange: React.EventHandler<React.ChangeEvent<HTMLInputElement>> = (event) => {
    setFromAccount(event.target.value);
  };
  const handleToAccountChange: React.EventHandler<React.ChangeEvent<HTMLInputElement>> = (event) => {
    setToAccount(event.target.value);
  };
  const handleAmountChange: React.EventHandler<React.ChangeEvent<HTMLInputElement>> = (event) => {
    setAmount(Number(event.target.value));
  }
  const handleCurrencyChange: React.EventHandler<React.ChangeEvent<HTMLSelectElement>> = (event) => {
    setCurrency(event.target.value as Currency);
  }

  const handleFormSubmit: React.EventHandler<React.FormEvent> = (event) => {
    event.preventDefault();

    const thunkResult = dispatch(addTransactionThunk({
      transaction: { transactionId: '', fromAccount, toAccount, amount },
      currency,
      fetch
    }));

    console.log({ thunkResult });

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

      <label htmlFor='currency'>
        Currency:
      </label>
      <select id='currency' value={currency} onChange={handleCurrencyChange}>
        {
          Object.values(Currency).map(currency => (
            <option key={currency} value={currency}>{currency}</option>
          ))
        }
      </select>

      <button type='submit'>
        Submit
      </button>
    </form>
  );
};

export {
  TransactionForm
};
