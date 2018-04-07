import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Splash from './components/Splash';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import ListDisplay from './components/ListDisplay';

class RouterComponent extends Component {
  componentWillReceiveProps(nextProps) {
    const { isAuthenticated, loading } = nextProps.auth;
    if (!isAuthenticated && loading) {
      Actions.reset('loading');
    } else if (!isAuthenticated && !loading) {
      Actions.reset('userAuth');
    } else {
      Actions.listDisplay();
    }
  }

  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="loading">
            <Scene key="splash" component={Splash} title="Loading..." />
          </Scene>
          <Scene key="userAuth">
            <Scene key="login" component={LoginForm} title="Please Login" auth={this.props.auth} />
            <Scene key="signup" component={SignupForm} title="Create Account" />
          </Scene>
          <Scene key="listDisplay" component={ListDisplay} title="List" />
        </Scene>
      </Router>
    );
  }
}

export default RouterComponent;
