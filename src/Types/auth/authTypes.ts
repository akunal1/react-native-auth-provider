export type AuthParams = {
  username: string;
  password: string;
  grant_type: 'password';
};

export type AuthResponse = {
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: number;
  scope: string;
  jti: string;
};

export type AuthActionType =
  | {type: 'AUTH_REQUEST'; params: AuthParams}
  | {type: 'AUTH_SUCCESS'; response: AuthResponse}
  | {type: 'AUTH_FAILURE'; error: string};
