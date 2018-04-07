import React from 'react';
import { TextInput, View, Text } from 'react-native';

const componentStyles = {
  containerStyle: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  inputStyle: {
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
    backgroundColor: '#f6f6f6',
  },
};

const Input = (props) => {
  const { containerStyle, labelStyle, inputStyle } = componentStyles;
  const {
    label, value, onChangeText, secureTextEntry,
  } = props;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={inputStyle}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export { Input };

