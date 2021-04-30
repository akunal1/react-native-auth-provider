import {View} from 'react-native';
import React from 'react';
import {ActivityIndicator} from 'react-native-paper';
import {useTheme} from '../../Themes/ThemeProvider';
import {getSplashStyles} from './splashScreenStyles';

const SplashScreen = () => {
  const {colors} = useTheme();
  const styles = getSplashStyles(colors);
  return (
    <View style={styles.screen}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default SplashScreen;
