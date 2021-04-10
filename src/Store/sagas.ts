import {takeLatest, all} from 'redux-saga/effects';
/* ------------- Types ---------  ---- */

/* ------------- Sagas ------------- */
import {getAuthRequest} from './Auth/saga';

// Add individual sagas here

/* ------------- API ------------- */
import {LoginApi} from '../Services/PreAuth/LoginApi';

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const loginApi = new LoginApi();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    // make all saga generators
    takeLatest('AUTH_REQUEST', getAuthRequest, loginApi),
  ]);
}
