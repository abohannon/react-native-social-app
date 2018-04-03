import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  CREATE_USER_PENDING,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
} from './types';


export const createUser = ({ firstName, email, password }) => async (dispatch) => {
  dispatch({ type: CREATE_USER_PENDING });
  try {
    // Return user when firebase promise resolves
    const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
    /* Once we have the user, Update the user's profile
     with their first name then pass to dispatch */
    await user.updateProfile({ displayName: firstName });

    dispatch({
      type: CREATE_USER_SUCCESS,
      payload: user,
    });
    // send new user to ListDisplay component after success
    Actions.listDisplay();
  } catch (err) {
    const error = {
      errorCode: err.code,
      errorMessage: err.message,
    };

    dispatch({
      type: CREATE_USER_FAIL,
      payload: error,
    });
  }
};

export const loginUser = () => {};

