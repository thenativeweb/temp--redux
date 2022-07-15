import { CurrencyConvertedAmount } from '../store/types/CurrencyConvertedAmount';

const convertAmountIntoCurrencies = function (
  amount: number,
  currencies: Record<string, number>
): CurrencyConvertedAmount {
  return Object.fromEntries(Object.entries(currencies).map(([ currencyName, currencyRate ]) => {
    return [ currencyName, Math.round(amount * currencyRate) ];
  }));
};

export {
  convertAmountIntoCurrencies
};
