/**
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import React, {PureComponent} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {AppearanceProvider} from 'react-native-appearance';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

import {createStore} from './Store';
import {ThemeProvider} from './Themes/ThemeProvider';
import {ToggleTheme} from './Components/ToggleTheme/ToggleTheme';
import {RootNavigation} from './Navigation/RootNavigation';
import {navigationRef} from './Navigation/NavigationService';

import {
  Provider as AuthProvider,
  Context as AuthContext,
} from './Navigation/AuthContext';

// create our Redux store
export const {store} = createStore();

// class App extends PureComponent {
//   navigator: any;

const App = () => {
  const {state} = React.useContext(AuthContext);
  console.log('context state->', state);

  return (
    <AuthProvider>
      <Provider store={store}>
        <PaperProvider>
          <AppearanceProvider>
            <ThemeProvider>
              <StatusBar barStyle="default" />
              <ToggleTheme />
              <NavigationContainer ref={navigationRef}>
                <RootNavigation state={state} />
              </NavigationContainer>
            </ThemeProvider>
          </AppearanceProvider>
        </PaperProvider>
      </Provider>
    </AuthProvider>
  );
};

export default App;
