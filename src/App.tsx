import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTransaction, AppState, Dispatch, revokeTransaction } from './store/setupStore';

function App() {
  const dispatch = useDispatch<Dispatch>();
  const transactions = useSelector((state: AppState) => state.transactions);

  const handleAddTransactionButtonClicked = function () {
    dispatch(addTransaction({
      transaction: {
        transactionId: 'test',
        fromAccount: 'hannes',
        toAccount: 'noah',
        amount: 1337
      }
    }));
  };
  const handleRevokeTransactionButtonClicked = function () {
    dispatch(revokeTransaction({
      transactionId: 'test'
    }));
  };

  return (
    <div className="App">
      <ul>
        {transactions.map(transaction => (<li>
          From: {transaction.fromAccount} To: {transaction.toAccount} Amount: {transaction.amount}
        </li>))}
      </ul>
      <button onClick={handleAddTransactionButtonClicked}>Add transaction!</button>
      <button onClick={handleRevokeTransactionButtonClicked}>Add transaction!</button>
    </div>
  );
}

export default App;
