import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {AppearanceProvider} from 'react-native-appearance';
import AsyncStorage from '@react-native-community/async-storage';
import {Provider} from 'react-redux';

import {ThemeProvider} from './Themes/ThemeProvider';
import {createStore} from './Store';
import {ToggleTheme} from './Components/ToggleTheme/ToggleTheme';
import {navigationRef} from './Navigation/NavigationService';
import {AuthNavigation} from './Navigation/RootNavigation';

import {LoginApi} from './Services/PreAuth/LoginApi';

interface LoginForm {
  username: string;
  password: string;
  grant_type: 'password';
}

export const AuthContext = React.createContext({
  login: (values: LoginForm) => {},
  logout: () => {},
  state: {},
});

export const {store} = createStore();

export default function App() {
  const [state, dispatch] = React.useReducer(
    (prevState: any, action: any) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'LOGIN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'LOGOUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('id_token');
      } catch (e) {}

      dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      login: async (params: LoginForm) => {
        const api = new LoginApi();
        const response = await api.loginApi(params);
        if (response.ok) {
          const id_token = response.data?.access_token;
          await AsyncStorage.setItem('id_token', id_token || '');
          dispatch({type: 'LOGIN', token: id_token});
        }
      },
      logout: async () => {
        await AsyncStorage.removeItem('id_token');
        dispatch({type: 'LOGOUT'});
      },
      state,
    }),
    [state],
  );

  return (
    <AuthContext.Provider value={authContext}>
      <Provider store={store}>
        <PaperProvider>
          <AppearanceProvider>
            <ThemeProvider>
              <StatusBar barStyle="default" />
              <ToggleTheme />
              <NavigationContainer ref={navigationRef}>
                <AuthNavigation state={state} />
              </NavigationContainer>
            </ThemeProvider>
          </AppearanceProvider>
        </PaperProvider>
      </Provider>
    </AuthContext.Provider>
  );
}
