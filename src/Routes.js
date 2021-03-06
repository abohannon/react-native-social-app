import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AsyncStorage } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { getItemFromAsyncStorage } from './helpers';
import { fetchUser } from './actions';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Nearby from './components/Nearby';
import { Spinner } from './components/common';

class Routes extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    fetchUser: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    // check to see if user exists; if so, user is authenticated.
    this.props.fetchUser();
  }

  render() {
    const { fetchingUser } = this.props.auth;
    if (fetchingUser) {
      return <Spinner />;
    }
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="public">
            <Scene key="login" component={LoginForm} title="Please Login" />
            <Scene key="signup" component={SignupForm} title="Create Account" />
          </Scene>
          <Scene key="private">
            <Scene key="nearby" component={Nearby} title="Nearby" />
          </Scene>
        </Scene>
      </Router>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, { fetchUser })(Routes);
