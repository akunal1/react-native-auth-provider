import AsyncStorage from '@react-native-community/async-storage';
import {_Navigation_Replace} from './NavigationService';

const authTokenValidator = async () => {
  try {
    const token_id = await AsyncStorage.getItem('id_token');
    console.log('token_id', token_id);

    if (token_id) {
      return true;
    } else {
      _Navigation_Replace('Login');
    }
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
