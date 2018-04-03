import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

const RouterComponent = () => (
  <Router>
    <Scene key="root">
      <Scene key="login" component={LoginForm} title="Please Login" />
      <Scene key="signup" component={SignupForm} title="Create Account" />
    </Scene>
  </Router>
);

export default RouterComponent;
