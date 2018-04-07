import { AsyncStorage } from 'react-native';

export const getItemFromAsyncStorage = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);

    if (value === null) {
      return false;
    }
    console.log('GIFAS', value);
    return value;
  } catch (error) {
    console.log('Error fetching key from Async Storage', error);
  }
};

export const setItemInAsyncStorage = () => {};

