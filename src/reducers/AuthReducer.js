import {
  CREATE_USER_PENDING,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  LOGIN_USER_PENDING,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  FETCH_USER_PENDING,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL,
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
    case LOGIN_USER_PENDING: {
      const newState = {
        loading: true,
      };
      return { ...state, ...newState };
    }
    case LOGIN_USER_SUCCESS: {
      const newState = {
        loading: false,
        message: action.payload,
        error: '',
        isAuthenticated: true,
      };
      return { ...state, ...newState };
    }
    case LOGIN_USER_FAIL: {
      const newState = {
        loading: false,
        error: action.payload,
        isAuthenticated: false,
      };
      return { ...state, ...newState };
    }
    case FETCH_USER_PENDING: {
      const newState = {
        loading: true,
      };
      return { ...state, ...newState };
    }
    case FETCH_USER_SUCCESS: {
      const newState = {
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
      return { ...state, ...newState };
    }
    case FETCH_USER_FAIL: {
      const newState = {
        loading: false,
        isAuthenticated: false,
        user: '',
        error: action.payload,
      };
      return { ...state, ...newState };
    }
    default:
      return state;
  }
};

