import { addTransaction } from './store/slices/transactionLogSlice';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { setupStore } from './store/store';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = setupStore();

store.dispatch(addTransaction({
  fromAccount: 'revenue:Salary',
  toAccount: 'assets:Cash',
  amount: 133700
}));
store.dispatch(addTransaction({
  fromAccount: 'assets:Cash',
  toAccount: 'expenses:Delivery',
  amount: 1599
}));
store.dispatch(addTransaction({
  fromAccount: 'assets:Cash',
  toAccount: 'expenses:Transport',
  amount: 900
}));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
