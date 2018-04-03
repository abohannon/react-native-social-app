import React, { Component } from 'react';
import { Animated, View, Text } from 'react-native';
import { connect } from 'react-redux'
import { Button, Input } from './common';
import { createUser } from '../actions';


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
        <Button onPress={() => this.props.createUser(this.state)}>Sign up</Button>
          <Text>Have an account? Login.</Text>
      </Animated.View>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth })
export default connect(mapStateToProps, { createUser })(SignupForm);