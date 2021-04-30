import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RootContainer from '../Containers/RootContainer';
import {Signup} from '../Screens/Signup/SignupForm';
import Home from '../Screens/Home/Home';
import A1Text from '../Components/Text/A1Text';
import Profile from '../Screens/Home/Profile';
import SplashScreen from '../Screens/Splash/SplashScreen';

const RootStack = createStackNavigator();

export const RootNavigation = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        cardShadowEnabled: true,
      }}>
      <RootStack.Screen
        name="Login"
        component={RootContainer}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

// TODO : WIP
export const HomeNavigation = () => {
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

const AuthStack = createStackNavigator();

export const AuthNavigation = ({state}: any) => {
  return (
    <AuthStack.Navigator>
      {state.isLoading ? (
        <AuthStack.Screen
          name="Splash"
          options={{headerShown: false}}
          component={SplashScreen}
        />
      ) : state.userToken == null ? (
        <AuthStack.Screen
          name="SignIn"
          options={{headerShown: false}}
          component={RootNavigation}
        />
      ) : (
        <AuthStack.Screen
          name="Home"
          options={{headerShown: false}}
          component={HomeNavigation}
        />
      )}
    </AuthStack.Navigator>
  );
};
