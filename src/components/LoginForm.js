import React, { Component } from 'react';
import { View, Text } from 'react-native';
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
      </View>
    );
  }
}

export default LoginForm;
