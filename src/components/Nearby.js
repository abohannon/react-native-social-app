import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Card } from './common';
import { fetchUserLocation } from '../actions';

class Nearby extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // fetch user location before component mounts
    this.props.fetchUserLocation();
  }

  render() {
    return (
      <View>
        <Card>
          <Text>List Item</Text>
        </Card>
        <Card>
          <Text>List Item</Text>
        </Card>
        <Card>
          <Text>List Item</Text>
        </Card>
        <Card>
          <Text>List Item</Text>
        </Card>
        <View>
          <Text onPress={() => firebase.auth().signOut()}>Logout</Text>
        </View>
      </View>
    );
  }
}

export default connect(null, { fetchUserLocation })(Nearby);
