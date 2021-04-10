import React, {memo} from 'react';
import {TextInput} from 'react-native-paper';

import _get from 'lodash/get';

import {
  TextInput as NativeTextInput,
  StyleProp,
  TextStyle,
  ColorValue,
  StyleSheet,
} from 'react-native';

import {useTheme} from '../../Themes/ThemeProvider';
import {Spacing} from '../../Themes';

type RenderProps = {
  ref: (a?: NativeTextInput | null) => void;
  onChangeText?: (a: string) => void;
  placeholder?: string;
  placeholderTextColor?: ColorValue;
  editable?: boolean;
  selectionColor?: string;
  onFocus?: (args: any) => void;
  onBlur?: (args: any) => void;
  underlineColorAndroid?: string;
  style: any;
  multiline?: boolean;
  numberOfLines?: number;
  value?: string;
  adjustsFontSizeToFit?: boolean;
};

type TextInputProps = React.ComponentPropsWithRef<typeof NativeTextInput> & {
  /**
   * Mode of the TextInput.
   * - `flat` - flat input with an underline.
   * - `outlined` - input with an outline.
   *
   * In `outlined` mode, the background color of the label is derived from `colors.background` in theme or the `backgroundColor` style.
   * This component render TextInputOutlined or TextInputFlat based on that props
   */
  mode?: 'flat' | 'outlined';
  left?: React.ReactNode;
  right?: React.ReactNode;
  /**
   * If true, user won't be able to interact with the component.
   */
  disabled?: boolean;
  /**
   * The text to use for the floating label.
   */
  label?: string;
  /**
   * Placeholder for the input.
   */
  placeholder?: string;
  /**
   * Whether to style the TextInput with error style.
   */
  error?: boolean;
  /**
   * Callback that is called when the text input's text changes. Changed text is passed as an argument to the callback handler.
   */
  onChangeText?: Function;
  /**
   * Selection color of the input
   */
  selectionColor?: string;
  /**
   * Underline color of the input.
   */
  underlineColor?: string;
  /**
   * Sets min height with densed layout. For `TextInput` in `flat` mode
   * height is `64dp` or in dense layout - `52dp` with label or `40dp` without label.
   * For `TextInput` in `outlined` mode
   * height is `56dp` or in dense layout - `40dp` regardless of label.
   * When you apply `heigh` prop in style the `dense` prop affects only `paddingVertical` inside `TextInput`
   */
  dense?: boolean;
  /**
   * Whether the input can have multiple lines.
   */
  multiline?: boolean;
  /**
   * The number of lines to show in the input (Android only).
   */
  numberOfLines?: number;
  /**
   * Callback that is called when the text input is focused.
   */
  onFocus?: (args: any) => void;
  /**
   * Callback that is called when the text input is blurred.
   */
  onBlur?: (args: any) => void;
  /**
   *
   * Callback to render a custom input component such as `react-native-text-input-mask`
   * instead of the default `TextInput` component from `react-native`.
   *
   * Example:
   * ```js
   * <TextInput
   *   label="Phone number"
   *   render={props =>
   *     <TextInputMask
   *       {...props}
   *       mask="+[00] [000] [000] [000]"
   *     />
   *   }
   * />
   * ```
   */
  render?: (props: RenderProps) => React.ReactNode;
  /**
   * Value of the text input.
   */
  value?: string;
  /**
   * Pass `fontSize` prop to modify the font size inside `TextInput`.
   * Pass `height` prop to set `TextInput` height. When `height` is passed,
   * `dense` prop will affect only input's `paddingVertical`.
   * Pass `paddingHorizontal` to modify horizontal padding.
   * This can be used to get MD Guidelines v1 TextInput look.
   */
  style?: StyleProp<TextStyle>;
  /**
   * @optional
   */
  theme?: any;
};

/**
 *
 * @param Props typeof TextInputProps
 * @returns react-native-paper TextInput
 * @description  A1TextInput is wrapper on react-native-paper TextInput , which is used to modify the base styling.
 */
const A1TextInput = (Props: TextInputProps) => {
  const {colors} = useTheme();

  const style = StyleSheet.create({
    inputStyle: {
      height: Spacing.largeX + Spacing.tiny,
      paddingVertical: Spacing.small,
      backgroundColor: _get(Props, 'disabled', false)
        ? colors.textInputDisabledBg
        : colors.textInputBg,
    },
  });
  return (
    <TextInput
      {...Props}
      mode="outlined"
      style={style.inputStyle}
      theme={{
        colors: {
          primary: colors.textInputBorder,
          text: colors.textInputText,
          placeholder: colors.textInputPlaceholderDefault,
        },
        roundness: Spacing.small,
        mode: 'exact',
      }}
    />
  );
};

export default memo(A1TextInput);
