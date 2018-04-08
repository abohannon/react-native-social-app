import React from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Card } from './common';

const ListDisplay = () => (
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

export default ListDisplay;
