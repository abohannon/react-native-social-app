import {
  CREATE_USER_PENDING,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  message: '',
  error: '',
  isAuthenticated: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_USER_PENDING: {
      const newState = {
        loading: true,
      };
      return { ...state, ...newState };
    }
    case CREATE_USER_SUCCESS: {
      const newState = {
        loading: false,
        message: action.payload,
        error: '',
        isAuthenticated: true,
      };
      return { ...state, ...newState };
    }
    case CREATE_USER_FAIL: {
      const newState = {
        loading: false,
        message: '',
        error: action.payload,
      };
      return { ...state, ...newState };
    }
    default:
      return state;
  }
};

