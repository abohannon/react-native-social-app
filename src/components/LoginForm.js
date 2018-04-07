import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { loginUser } from '../actions';
import { Button, Input, Spinner } from './common';

const componentStyles = {
  containerStyle: {
    height: 400,
  },
};

class LoginForm extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    loginUser: PropTypes.func.isRequired,
  }

  state = {
    email: '',
    password: '',
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="small" />;
    }
    return (
      <Button onPress={() => this.props.loginUser(this.state)}>
        Login
      </Button>
    );
  }

  render() {
    const { containerStyle } = componentStyles;
    return (
      <View style={containerStyle}>
        <Text>
          Please Login
        </Text>
        <Input
          label="Email"
          onChangeText={email => this.setState({ email })}
        />
        <Input
          label="Password"
          onChangeText={password => this.setState({ password })}
          secureTextEntry
        />

        {this.renderButton()}

        <Text onPress={() => Actions.signup()}>Need an account? Sign up.</Text>
      </View>
    );
  }
}
const mapStateToProps = state => ({ loading: state.auth.loggingInUser });

export default connect(mapStateToProps, { loginUser })(LoginForm);
