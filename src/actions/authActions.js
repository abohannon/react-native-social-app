import firebase from 'firebase';
import {
  CREATE_USER_PENDING,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
} from './types';


export const createUser = ({ firstName, email, password }) => async (dispatch) => {
  dispatch({ type: CREATE_USER_PENDING });
  try {
    const res = await firebase.auth().createUserWithEmailAndPassword(email, password);

    if (res.status !== 200) throw res.data;

    dispatch({ type: CREATE_USER_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: CREATE_USER_FAIL, payload: err });
  }
};

export const loginUser = () => {};

