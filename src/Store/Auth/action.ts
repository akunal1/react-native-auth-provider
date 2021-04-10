import {
  AuthActionType,
  AuthParams,
  AuthResponse,
} from '../../Types/auth/authTypes';

export function authRequest(params: AuthParams): AuthActionType {
  return {type: 'AUTH_REQUEST', params};
}

export function authSuccess(response: AuthResponse): AuthActionType {
  return {type: 'AUTH_SUCCESS', response};
}

export function authFailure(error: string): AuthActionType {
  return {type: 'AUTH_FAILURE', error};
}
