import firebase from 'firebase';
import {
  CREATE_USER_PENDING,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
} from './types';


export const createUser = ({ firstName, email, password }) => (dispatch) => {
  dispatch({ type: CREATE_USER_PENDING });
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      dispatch({ type: CREATE_USER_SUCCESS, payload: 'User created' });
    }).catch((err) => {
      const error = {
        errorCode: err.code,
        errorMessage: err.message,
      };

      dispatch({ type: CREATE_USER_FAIL, payload: error });
    });
};

export const loginUser = () => {};

