import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import ListDisplay from './components/ListDisplay';

const RouterComponent = () => (
  <Router>
    <Scene key="root" hideNavBar>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" />
        <Scene key="signup" component={SignupForm} title="Create Account" />
      </Scene>
      <Scene key="listDisplay" component={ListDisplay} title="List" />
    </Scene>
  </Router>
);

export default RouterComponent;
