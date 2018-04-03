import React, { Component } from 'react';
import { Animated, View, Text } from 'react-native';
import { Button, Input } from './common';

const componentStyles = {
  containerStyle: {
    height: 400,
  }
}

class SignupForm extends Component {
  state = {
    firstName: '',
    email: '',
    password: '',
  }

  render() {
    const { containerStyle } = componentStyles
    return (
      <Animated.View style={containerStyle}>
        <Text>
          Signup Form
        </Text>
        <Input
          label="First Name"
          onChangeText={firstName => this.setState({ firstName })}
        />
        <Input
          label="Email"
          onChangeText={email => this.setState({ email })}
        />
        <Input
          label="Password"
          onChangeText={password => this.setState({ password })}
        />
        <Button onPress={() => console.log('Pressed!')}>Sign up</Button>
     
          <Text>Have an account? Login.</Text>
   
      </Animated.View>
    );
  }
}

export default SignupForm;