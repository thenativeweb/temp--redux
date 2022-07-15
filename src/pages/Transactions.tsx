import { convertAmountIntoCurrencies } from '../utils/convertAmountIntoCurrencies';
import { CurrenciesState } from '../store/slices/currenciesSlice';
import { Transaction } from '../store/types/Transaction';
import { TransactionForm } from '../components/TransactionForm';
import { TransactionTable } from '../components/TransactionTable';
import { State } from '../store/store';
import { useSelector } from 'react-redux';
import * as React from 'react';

const Transactions: React.FunctionComponent = () => {
  const rawTransactions = useSelector<State, Transaction[]>((state) => state.transactions);
  const currencies = useSelector<State, CurrenciesState>((state) => state.currencies);

  const currencyNames = Object.keys(currencies);
  const transactionsWithConvertedAmounts = rawTransactions.map(transaction => {
    return {
      ...transaction,
      convertedAmount: convertAmountIntoCurrencies(transaction.amount, currencies)
    };
  });

  return (
    <div>
      <TransactionForm />
      <TransactionTable transactions={transactionsWithConvertedAmounts} currencies={currencyNames} />
    </div>
  );
};

export {
  Transactions
};
