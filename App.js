import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import firebase from 'firebase';
import { StyleSheet, Text, View } from 'react-native';
import reducers from './src/reducers';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';

const componentStyles = {

};

export default class App extends Component {
  constructor(props) {
    super(props);
    // Initialize Firebase
    firebase.initializeApp({
      apiKey: 'AIzaSyASWMSd5uCVLPEKimaK6EDnWoQRWx7DN9I',
      authDomain: 'react-native-social-app-4322c.firebaseapp.com',
      databaseURL: 'https://react-native-social-app-4322c.firebaseio.com',
      projectId: 'react-native-social-app-4322c',
      storageBucket: '',
      messagingSenderId: '917447438216',
    });
  }

  render() {
    // due to performance issues, only include redux-logger in dev
    let middleware = [thunk];
    if (process.env.NODE_ENV !== 'production') {
      const { logger } = require('redux-logger');
      middleware = [...middleware, logger];
    }

    const store = createStore(reducers, applyMiddleware(...middleware));

    return (
      <Provider store={store}>
        <View style={componentStyles.containerStyle}>
          <Header title="Header" />
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

console.disableYellowBox = true;
