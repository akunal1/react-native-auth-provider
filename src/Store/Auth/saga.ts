import {ApiResponse} from 'apisauce';
import {call, put} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import _get from 'lodash/get';

import {LoginApi} from '../../Services/PreAuth/LoginApi';
import {AuthResponse} from '../../Types/auth/authTypes';
import * as actions from './action';
import {_Navigate_To} from '../../Navigation/NavigationService';

export function* getAuthRequest(api: LoginApi, action: any) {
  try {
    // const {navigation} = action.params;
    const response: ApiResponse<AuthResponse, AuthResponse> = yield call(
      api.loginApi,
      action.params,
    );

    console.log('response===>>>>', response);

    if (response.ok) {
      yield AsyncStorage.setItem(
        'id_token',
        _get(response, 'data.access_token', ''),
      );
      _Navigate_To('Home');
      // yield put(actions.authSuccess(result));
    } else {
      // yield put(actions.authFailure(response.problem));
    }
  } catch (error) {
    yield put(actions.authFailure(error));
  }
}
