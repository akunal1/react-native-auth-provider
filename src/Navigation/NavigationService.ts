import {NavigationContainerRef, StackActions} from '@react-navigation/native';
import React from 'react';

export const navigationRef = React.createRef<NavigationContainerRef>();

export const _Navigate_To = (name: string, params?: any) =>
  navigationRef.current && navigationRef.current.navigate(name, params);

export const _Navigation_Replace = (name: string, params?: any) =>
  navigationRef.current &&
  navigationRef.current.dispatch(StackActions.replace(name, params));
