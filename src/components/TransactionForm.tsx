import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTransactionInCurrency } from '../store/slices/addTransactionInCurrency';
import { StoreDispatch } from '../store/store';
import { Currency } from '../utils/Currency';
import './TransactionForm.css';

const TransactionForm: React.FunctionComponent = () => {
  const dispatch = useDispatch<StoreDispatch>();

  const [ fromAccount, setFromAccount ] = useState('');
  const [ toAccount, setToAccount ] = useState('');
  const [ amount, setAmount ] = useState(0);
  const [ currency, setCurrency ] = useState<Currency>(Currency.EUR);

  const handleFromAccountChange: React.EventHandler<React.ChangeEvent<HTMLInputElement>> = (event) => {
    setFromAccount(event.target.value);
  }
  const handleToAccountChange: React.EventHandler<React.ChangeEvent<HTMLInputElement>> = (event) => {
    setToAccount(event.target.value);
  }
  const handleAmountChange: React.EventHandler<React.ChangeEvent<HTMLInputElement>> = (event) => {
    setAmount(Number(event.target.value));
  }
  const handleCurrencyChange: React.EventHandler<React.ChangeEvent<HTMLSelectElement>> = (event) => {
    setCurrency(event.target.value as Currency);
  };
  const handleSubmit: React.EventHandler<React.FormEvent<HTMLFormElement>> = (event) => {
    event.preventDefault();
    dispatch(addTransactionInCurrency({
      transaction: {
        fromAccount,
        toAccount,
        amount
      },
      currency,
    }));
    setFromAccount('');
    setToAccount('');
    setAmount(0);
  };

  return (
    <form onSubmit={handleSubmit} className='transaction-form'>
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
      <input id='amount' type='number' value={amount} onChange={handleAmountChange} />
      <label htmlFor='amount'>
        Currency:
      </label>
      <select id='currency' value={currency} onChange={handleCurrencyChange} >
        {
          Object.values(Currency).map((currency) => (
            <option value={currency}>{currency}</option>
          ))
        }
      </select>
      <button type='submit'>
        Submit
      </button>
    </form>
  )
};

export {
  TransactionForm
};
