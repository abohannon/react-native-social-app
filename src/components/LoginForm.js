import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Input } from './common';

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
          LOGIN FORM
        </Text>
        <Input
          label="Email"
          onChangeText={email => this.setState({email})}
        />
        <Input
          label="Password"
          onChangeText={password => this.setState({ password })}
        />
        <Button onPress={() => console.log('Pressed!')}>Login</Button>
        <Text onPress={() => Actions.signup()}>Need an account? Sign up.</Text>
      </View>
    );
  }
}

export default LoginForm;
