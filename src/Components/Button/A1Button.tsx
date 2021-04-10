import * as React from 'react';
import {StyleProp, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Button} from 'react-native-paper';
// eslint-disable-next-line import/no-unresolved
import {IconSource} from 'react-native-paper/lib/typescript/components/Icon';
import {Spacing} from '../../Themes';
import {useTheme} from '../../Themes/ThemeProvider';

interface A1ButtonProps {
  /**
   * Mode of the button. You can change the mode to adjust the styling to give it desired emphasis.
   * - `text` - flat button without background or outline (low emphasis)
   * - `outlined` - button with an outline (medium emphasis)
   * - `contained` - button with a background color and elevation shadow (high emphasis)
   */
  mode?: 'text' | 'outlined' | 'contained';
  /**
   * Whether the color is a dark color. A dark button will render light text and vice-versa. Only applicable for `contained` mode.
   */
  dark?: boolean;
  /**
   * Use a compact look, useful for `text` buttons in a row.
   */
  compact?: boolean;
  /**
   * Custom text color for flat button, or background color for contained button.
   */
  color?: 'red';
  /**
   * Whether to show a loading indicator.
   */
  loading?: boolean;
  /**
   * Icon to display for the `Button`.
   */
  icon?: IconSource;
  /**
   * Whether the button is disabled. A disabled button is greyed out and `onPress` is not called on touch.
   */
  disabled?: boolean;
  /**
   * Label text of the button.
   */
  children: React.ReactNode;
  /**
   * Make the label text uppercased. Note that this won't work if you pass React elements as children.
   */
  uppercase?: boolean;
  /**
   * Accessibility label for the button. This is read by the screen reader when the user taps the button.
   */
  accessibilityLabel?: 'red';
  /**
   * Function to execute on press.
   */
  onPress?: () => void;
  /**
   * Function to execute on long press.
   */
  onLongPress?: () => void;
  /**
   * Style of button's inner content.
   * Use this prop to apply custom height and width and to set the icon on the right with `flexDirection: 'row-reverse'`.
   */
  contentStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  /**
   * Style for the button text.
   */
  labelStyle?: StyleProp<TextStyle>;
  /**
   * @optional
   */
  theme?: any;
  /**
   * testID to be used on tests.
   */
  testID?: 'red';
  /**
   * custome label for button text
   */
  label?: 'red';
}

const A1Button = (props: A1ButtonProps) => {
  const {onPress, children, mode = 'text', disabled}: A1ButtonProps = props;
  const {colors} = useTheme();
  const styles = StyleSheet.create({
    outlineBtnBorder: {
      borderColor: colors.outlineBtnBorder,
      borderRadius: Spacing.small,
    },
    outlineBtnDisabled: {
      borderColor: '#a6a6a6',
      borderRadius: Spacing.small,
    },
    containedDisabledBtn: {
      backgroundColor: 'lightgrey',
    },
  });

  let btnStyle;
  let btnText = '#6438C3';
  if (mode === 'outlined' && disabled) {
    btnStyle = styles.outlineBtnDisabled;
    btnText = '#a6a6a6';
  } else if (mode === 'outlined') {
    btnStyle = styles.outlineBtnBorder;
    btnText = '#6438C3';
  } else if (mode === 'contained' && disabled) {
    btnText = '#4d4d4d';
    btnStyle = styles.containedDisabledBtn;
  } else if (mode === 'contained') {
    btnText = 'white';
  } else if (mode === 'text' && disabled) {
    btnText = colors.textBtnDisabled;
  } else if (mode === 'text') {
    btnText = '#6438C3';
  }

  return (
    <Button
      {...props}
      onPress={onPress}
      style={btnStyle}
      dark={true}
      labelStyle={{color: btnText}}
      theme={{
        colors: {
          primary: '#6438C3',
          placeholder: colors.textInputPlaceholderDefault,
        },
      }}>
      {children}
    </Button>
  );
};

export default React.memo(A1Button);
