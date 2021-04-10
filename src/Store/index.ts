import {combineReducers} from 'redux';
import configureStore from './createStore';
import rootSaga from './sagas';
import {authReducer} from './Auth/reducer';

/* ------------- Assemble The Reducers ------------- */
const rootReducer = combineReducers({
  auth: authReducer,
});

// Create the store
export const createStore = () => configureStore(rootReducer, rootSaga);

// Create Types for our AppState
// eslint-disable-next-line no-undef
export type GlobalState = ReturnType<typeof rootReducer>;

export interface StandardApiState<T> {
  data: T;
  status: string;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  dateFetched: Date;
}
