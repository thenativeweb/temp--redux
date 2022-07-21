import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppState, Dispatch } from './store/setupStore';

function App() {
  const dispatch = useDispatch<Dispatch>();
  const transactions = useSelector((state: AppState) => state.transactions);

  const handleButtonClick = function () {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: {
        transaction: {
          fromAccount: 'hannes',
          toAccount: 'noah',
          amount: 1337
        }
      }
    })
  }

  return (
    <div className="App">
      <ul>
        {transactions.map(transaction => (<li>
          From: {transaction.fromAccount} To: {transaction.toAccount} Amount: {transaction.amount}
        </li>))}
      </ul>
      <button onClick={handleButtonClick}>Add transaction!</button>
    </div>
  );
}

export default App;
