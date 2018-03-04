import * as actionTypes from './../constants/action-types';

export function changeRootRequest(navigator, root) {
  return {
    type: actionTypes.ROOT_CHANGE_REQUEST,
    navigator,
    root
  };
}

export function changeRoot(root) {
  return {
    type: actionTypes.ROOT_CHANGED,
    root
  };
}

export function initializeApp() {
  return changeRoot('login');
}

export function authorizeUser(userName) {
  return {
    type: actionTypes.AUTHORIZE_USER,
    userName
  };
}

export function logOut() {
  return {
    type: actionTypes.LOG_OUT
  };
}

export function loadQuestions() {
  return {
    type: actionTypes.LOAD_QUESTIONS
  };
}

export function loadQuestionsStart() {
  return {
    type: actionTypes.LOAD_QUESTIONS_START
  };
}

export function loadQuestionsSuccess(items) {
  return {
    type: actionTypes.LOAD_QUESTIONS_SUCCESS,
    items
  };
}

export function loadQuestionsError(error) {
  return {
    type: actionTypes.LOAD_QUESTIONS_ERROR,
    error
  };
}
