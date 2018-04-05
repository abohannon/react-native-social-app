import React from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

const ListDisplay = () => (
  <View>
    <Text>List Item</Text>
    <Text>List Item</Text>
    <Text>List Item</Text>
    <Text>List Item</Text>
    <Text onPress={() => firebase.auth().signOut()}>Logout</Text>
  </View>
);

export default ListDisplay;
