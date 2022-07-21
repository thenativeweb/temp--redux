import { combineEpics } from 'redux-observable';
import { addTransactionEpic } from './addTransaction/addTransaction';

const rootEpic = combineEpics(
  addTransactionEpic
);

export {
  rootEpic
};
