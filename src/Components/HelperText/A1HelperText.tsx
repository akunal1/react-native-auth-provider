import React from 'react';
import {StyleProp, StyleSheet, TextStyle} from 'react-native';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {HelperText} from 'react-native-paper';
import {useTheme} from '../../Themes/ThemeProvider';

interface Props {
  /**
   * Type of the helper text.
   */
  type: 'error' | 'info';
  /**
   * Whether to display the helper text.
   */
  visible?: boolean;
  /**
   * Whether to apply padding to the helper text.
   */
  padding?: 'none' | 'normal';

  style?: StyleProp<TextStyle>;
  /**
   * @optional
   */
  theme?: any;
  /**
   * TestID used for testing purposes
   */
  testID?: string;
  title: string | undefined;
  iconName?: string;
}

export const A1HelperText = (props: Props) => {
  const {title = '', visible, style, type, iconName}: Props = props;

  const {colors} = useTheme();
  const styles = StyleSheet.create({
    textStyle: {
      paddingVertical: 0,
      color: type === 'info' ? colors.textInfoMessage : colors.textErrorMessage,
    },
  });

  return visible ? (
    <HelperText {...props} padding="none" style={[style, styles.textStyle]}>
      {!!iconName && <AwesomeIcon name={iconName} />} {title}
    </HelperText>
  ) : null;
};
