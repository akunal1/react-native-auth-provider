import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RootContainer from '../Containers/RootContainer';
import {Signup} from '../Screens/Signup/SignupForm';
import Home from '../Screens/Home/Home';
import authTokenValidator from './tokenValidator';
import A1Text from '../Components/Text/A1Text';
import Profile from '../Screens/Home/Profile';

const RootStack = createStackNavigator();

export const RootNavigation3 = () => {
  let route = '';
  let isAuth;
  (async () => {
    isAuth = await authTokenValidator();
  })();
  console.log('isAuth', isAuth);
  route = !isAuth ? 'Login' : 'Home';

  return (
    <RootStack.Navigator
      initialRouteName={route}
      screenOptions={{
        cardShadowEnabled: true,
      }}>
      <RootStack.Screen
        name="Login"
        component={RootContainer}
        options={{headerShown: false}}
      />
      <RootStack.Screen name="Signup" component={Signup} />
      <RootStack.Screen name="Home" component={Home} />
    </RootStack.Navigator>
  );
};

const AuthStack = createStackNavigator();
const AuthNavigation = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        options={{headerShown: false}}
        name="Signin"
        component={RootContainer}
      />
      <AuthStack.Screen
        options={{headerShown: false}}
        name="Signup"
        component={Signup}
      />
    </AuthStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const HomeNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          switch (route.name) {
            case 'Tab1':
              iconName = focused ? 'ios-checkbox' : 'ios-checkbox-outline';
              break;
            case 'Tab2':
              iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
              break;
            case 'Tab3':
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
              break;
          }

          // You can return any component that you like here!
          return <A1Text>{iconName}</A1Text>;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();
export const RootNavigation = ({state}) => {
  console.log('state', state);

  return (
    <Stack.Navigator>
      {!state?.token ? (
        <>
          <Stack.Screen
            options={{headerShown: false}}
            name="Login"
            component={AuthNavigation}
          />
        </>
      ) : (
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomeNavigation}
        />
      )}
    </Stack.Navigator>
  );
};
