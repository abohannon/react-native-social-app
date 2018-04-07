import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { fetchUser } from './actions';
import Splash from './components/Splash';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import ListDisplay from './components/ListDisplay';

class Routes extends Component {
  componentDidMount() {
    // TODO: Update in favor of firebase's onAuthStateChanged(user)?
    this.props.fetchUser();
  }

  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="public">
            <Scene key="login" component={LoginForm} title="Please Login" auth={this.props.auth} />
            <Scene key="signup" component={SignupForm} title="Create Account" />
          </Scene>
          <Scene key="private">
            <Scene key="listDisplay" component={ListDisplay} title="List" />
          </Scene>
        </Scene>
      </Router>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, { fetchUser })(Routes);
