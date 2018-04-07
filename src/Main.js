import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Router from './Router';
import { fetchUser } from './actions';

class Main extends Component {
  componentDidMount() {
    // TODO: Update in favor of firebase's onAuthStateChanged(user)?
    this.props.fetchUser();
  }

  render() {
    return (
      <Router auth={this.props.auth} />
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, { fetchUser })(Main);

