import {StandardApiState} from '..';
import {AuthActionType, AuthResponse} from '../../Types/auth/authTypes';
import {createEmptyState} from '../utils';

const initialData: any = {};
const initialState = createEmptyState(initialData);

export function authReducer(
  state = initialState,
  action: AuthActionType,
): StandardApiState<AuthResponse> {
  switch (action.type) {
    case 'AUTH_REQUEST':
      return {...state, isLoading: true};
    case 'AUTH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        dateFetched: new Date(),
        status: 'Success',
        errorMessage: '',
        data: {...action.response},
      };
    case 'AUTH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.error,
      };
    default:
      return state;
  }
}
