import {all} from 'redux-saga/effects';
import navigation from './sagas/navigation';
import stackOverflow from './sagas/stackOverflow.js';

export default function* saga() {
  yield all([
    navigation(),
    stackOverflow()
  ])
}