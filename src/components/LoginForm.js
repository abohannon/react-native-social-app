import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { loginUser } from '../actions'
import { Button, Input, Spinner } from './common';

const componentStyles = {
  containerStyle: {
    height: 400,
  }
}

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  }

  render() {
    const { containerStyle } = componentStyles
    return (
      <View style={containerStyle}>
        <Text>
          Please Login
        </Text>
        <Input
          label="Email"
          onChangeText={email => this.setState({email})}
        />
        <Input
          label="Password"
          onChangeText={password => this.setState({ password })}
        />

        <Button onPress={() => this.props.loginUser(this.state)}>
          Login
      </Button>

        <Text onPress={() => Actions.signup()}>Need an account? Sign up.</Text>
      </View>
    );
  }
}

export default connect(null, { loginUser })(LoginForm);
