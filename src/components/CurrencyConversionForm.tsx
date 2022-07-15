import { fetchCurrency } from '../store/slices/currenciesSlice';
import { StoreDispatch } from '../store/store';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import * as React from 'react';
import './CurrencyConversionForm.css';

const CurrencyConversionForm: React.FunctionComponent = () => {
  const dispatch = useDispatch<StoreDispatch>()
  const [ currencyCode, setCurrencyCode ] = useState('');

  const handleCurrencyCodeChange: React.EventHandler<React.ChangeEvent<HTMLInputElement>> = (event) => {
    setCurrencyCode(event.target.value);
  }
  const handleSubmit: React.EventHandler<React.FormEvent<HTMLFormElement>> = (event) => {
    event.preventDefault();

    dispatch(fetchCurrency(currencyCode));
    setCurrencyCode('');
  }

  return (
    <div className='currency-conversion-form'>
      <p>
        Do you want to convert your euros into some other currency? Please enter the ISO 4217 currency code (e.g. USD):
      </p>
      <form onSubmit={handleSubmit} className='transaction-form'>
        <label htmlFor='currency-code'>
          Currency code:
        </label>
        <input id='currency-code' type='text' value={currencyCode} onChange={handleCurrencyCodeChange} />
        <button type='submit'>
          Convert
        </button>
      </form>
    </div>
  )
};

export {
  CurrencyConversionForm
};
