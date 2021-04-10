import {ApiResponse} from 'apisauce';
import {AuthParams, AuthResponse} from '../../Types/auth/authTypes';
import {PreAuthApi} from '../PreAuthApiConfig';

export class LoginApi extends PreAuthApi {
  loginApi = (params: AuthParams): Promise<ApiResponse<AuthResponse>> => {
    const {grant_type, username, password}: AuthParams = params;
    this.api.setHeader('Content-Type', 'application/x-www-form-urlencoded');
    this.api.setHeader(
      ' Authorization',
      'Basic MjIwNjE5OTMtMDgwNzE5OTQtMTAwNDE5OTQ6cGFzc3dvcmQ=',
    );

    // TODO: Send in header
    return this.api.post(
      `oauth/token?grant_type=${grant_type}&username=${username}&password=${password}`,
    );
  };
}
