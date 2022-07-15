import { Transaction } from './Transaction';
import { CurrencyConvertedAmount } from './CurrencyConvertedAmount';

type TransactionWithConvertedAmounts = Transaction & { convertedAmount: CurrencyConvertedAmount };

export type {
  TransactionWithConvertedAmounts
};
