import AsyncStorage from '@react-native-community/async-storage';
import {_Navigation_Replace} from './NavigationService';

const authTokenValidator = async () => {
  try {
    await AsyncStorage.getItem('id_token', value => {
      if (value) {
        return value;
      } else {
        _Navigation_Replace('Login');
      }
    });
  } catch (error) {
    console.log('ERROR: Navigation / tokenValidator():', error);
    _Navigation_Replace('Login');
  }
};

export const logout = async () => {
  await AsyncStorage.removeItem('id_token');
  _Navigation_Replace('Login');
};

export default authTokenValidator;
