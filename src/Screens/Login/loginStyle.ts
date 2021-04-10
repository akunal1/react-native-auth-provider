import {StyleSheet} from 'react-native';
import {Spacing} from '../../Themes';

export const getLoginStyle = (colors: any) => {
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: colors.screenBg,
    },
    screenPadding: {
      paddingHorizontal: Spacing.mediumX,
    },
    loginBtnSection: {
      marginTop: 24,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    orContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'center',
      paddingVertical: 48,
    },
    orSpacing: {paddingHorizontal: Spacing.mediumX},
    subScreenContainer: {paddingTop: 120, paddingBottom: 20},
  });
};
