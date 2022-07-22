import {addTransaction} from '../../slices/transactionLog';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {Transaction} from '../../types/Transaction';
import {addAccount, addBalance} from '../../slices/accounts';
import {Currency} from "../../types/Currency";
import { AppState, RootAction } from '../../setupStore';
import { Epic } from 'redux-observable';
import { catchError, concatMap, filter, from, mergeMap, of } from 'rxjs';
import { isActionOf } from 'typesafe-actions';
import { addTransactionEpicAction } from './actions';

const addTransactionEpic: Epic<RootAction, RootAction, AppState, { fetch: typeof fetch }>
  = (action$, state$, services) => action$.pipe(
    filter(isActionOf(addTransactionEpicAction.request)),
    mergeMap(action =>
      action.payload.currency === Currency.EUR
        ? of(action.payload.transaction)
        : from(
          services.fetch(
            `https://api.frankfurter.app/latest?from=${action.payload.currency}&to=${Currency.EUR}`
          )
            .then(response => response.json())
            .then(exchangeRates => ({
              ...action.payload.transaction,
              amount: action.payload.transaction.amount * exchangeRates.rates[Currency.EUR]
            }))
      )
    ),
    concatMap(
      transaction => {
        return [
          addTransaction({ transaction }),
          addAccount({ accountName: transaction.fromAccount }),
          addAccount({ accountName: transaction.toAccount }),
          addBalance({ accountName: transaction.fromAccount, amount: -transaction.amount }),
          addBalance({ accountName: transaction.toAccount, amount: transaction.amount }),
          addTransactionEpicAction.success()
        ]
      }
    ),
    catchError(error => of(addTransactionEpicAction.failure(error)))
  );


export {
  addTransactionEpic
};
