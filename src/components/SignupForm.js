import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button, Input, Spinner } from './common';
import { createUser } from '../actions';


const componentStyles = {
  containerStyle: {
    height: 400,
  },
};

class SignupForm extends Component {
  state = {
    firstName: '',
    email: '',
    password: '',
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={() => this.props.createUser(this.state)}>Sign up</Button>
    );
  }

  render() {
    const { containerStyle } = componentStyles;
    return (
      <View style={containerStyle}>
        <Text>
          Please Signup
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
          secureTextEntry
        />

        {this.renderButton()}

      </View>
    );
  }
}

const mapStateToProps = state => ({ loading: state.auth.creatingUser });
export default connect(mapStateToProps, { createUser })(SignupForm);
