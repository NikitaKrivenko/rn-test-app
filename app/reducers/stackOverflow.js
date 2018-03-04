import {
  LOAD_QUESTIONS_START,
  LOAD_QUESTIONS_SUCCESS,
  LOAD_QUESTIONS_ERROR
} from './../constants/action-types';

const initialState = {
  isLoading: false,
  isError: false,
  error: null,
  items: []
};

export default function stackOverflow(state = initialState, action) {
  switch (action.type) {
    case LOAD_QUESTIONS_START:
      return {
        ...state,
        isLoading: true
      };
    case LOAD_QUESTIONS_SUCCESS:
      return {
        isLoading: false,
        isError: false,
        items: action.items
      };
    case LOAD_QUESTIONS_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.error
      };
    default:
      return state;
  }
}