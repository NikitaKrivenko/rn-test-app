import {
  AUTHORIZE_USER,
  LOG_OUT
} from './../constants/action-types';

const initialState = {
  isAuthorized: false,
  userName: null
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case AUTHORIZE_USER:
      return {
        isAuthorized: true,
        userName: action.userName
      };
    case LOG_OUT:
      return initialState;
    default:
      return state;
  }
}