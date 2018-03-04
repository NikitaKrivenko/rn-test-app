import {put, takeEvery, call} from 'redux-saga/effects';
import {
  loadQuestionsStart,
  loadQuestionsSuccess,
  loadQuestionsError
} from './../actions';
import {
  LOAD_QUESTIONS
} from './../constants/action-types';

import RequestManager from './../utils/requestManager';

function* handleQuestionsLoading() {
  yield put(loadQuestionsStart());

  try {
    const items = yield call(RequestManager.getStackOverflowQuestions);

    yield put(loadQuestionsSuccess(items));
  } catch (error) {
    yield put(loadQuestionsError(error.message));
  }
}

function* WatchLoadQuestions() {
  yield takeEvery(LOAD_QUESTIONS, handleQuestionsLoading);
}

export default WatchLoadQuestions;
