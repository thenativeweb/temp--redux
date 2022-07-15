import { addTransaction } from './store/actions/AddTransaction';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { storeFactory } from './store/store';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const reduxStore = storeFactory();

reduxStore.dispatch(addTransaction({
  fromAccount: 'revenue:Salary',
  toAccount: 'assets:Cash',
  amount: 133700
}));
reduxStore.dispatch(addTransaction({
  fromAccount: 'assets:Cash',
  toAccount: 'expenses:Delivery',
  amount: 1599
}));
reduxStore.dispatch(addTransaction({
  fromAccount: 'assets:Cash',
  toAccount: 'expenses:Transport',
  amount: 900
}));

root.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
