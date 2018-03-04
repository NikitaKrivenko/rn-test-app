import {ROOT_CHANGED} from './../constants/action-types';
import {screensNames} from './../constants/screens';

const initialState = {
  root: screensNames.login
};

export default function navigation(state = initialState, action) {
  switch (action.type) {
    case ROOT_CHANGED:
      return {
        root: action.root
      };
    default:
      return state;
  }
};