import createDataContext from './createDataContext';

const authReducer = (state: any, action: any) => {
  console.log();

  switch (action.type) {
    case 'signout':
      return {token: null};
    case 'signup':
      return {
        token: action.payload.token,
      };
    default:
      return {...state};
  }
};

const signin = (dispatch: any) => {
  return ({email, password}: any) => {
    // Do some API Request here
    console.log('Signin', email, password);
    dispatch({
      type: 'signin',
      payload: {
        token: password,
      },
    });
  };
};

const signout = (dispatch: any) => {
  return () => {
    dispatch({type: 'signout'});
  };
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signin, signout},
  {token: null},
);
