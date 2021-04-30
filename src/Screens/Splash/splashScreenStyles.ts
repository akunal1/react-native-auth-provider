import {StyleSheet} from 'react-native';

export const getSplashStyles = (colors: any) =>
  StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      backgroundColor: colors.screenBg,
    },
  });
