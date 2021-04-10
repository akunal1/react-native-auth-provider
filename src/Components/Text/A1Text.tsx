import React, {memo, ReactNode} from 'react';
import {
  GestureResponderEvent,
  LayoutChangeEvent,
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  Text,
  TextLayoutEventData,
  TextStyle,
} from 'react-native';
import _get from 'lodash/get';
import {useTheme} from '../../Themes/ThemeProvider';

interface TextProps {
  /**
   * Specifies whether fonts should scale to respect Text Size accessibility settings.
   * The default is `true`.
   */
  allowFontScaling?: boolean;

  /**
   * This can be one of the following values:
   *
   * - `head` - The line is displayed so that the end fits in the container and the missing text
   * at the beginning of the line is indicated by an ellipsis glyph. e.g., "...wxyz"
   * - `middle` - The line is displayed so that the beginning and end fit in the container and the
   * missing text in the middle is indicated by an ellipsis glyph. "ab...yz"
   * - `tail` - The line is displayed so that the beginning fits in the container and the
   * missing text at the end of the line is indicated by an ellipsis glyph. e.g., "abcd..."
   * - `clip` - Lines are not drawn past the edge of the text container.
   *
   * The default is `tail`.
   *
   * `numberOfLines` must be set in conjunction with this prop.
   *
   * > `clip` is working only for iOS
   */
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';

  /**
   * Line Break mode. Works only with numberOfLines.
   * clip is working only for iOS
   */
  lineBreakMode?: 'head' | 'middle' | 'tail' | 'clip';

  /**
   * Used to truncate the text with an ellipsis after computing the text
   * layout, including line wrapping, such that the total number of lines
   * does not exceed this number.
   *
   * This prop is commonly used with `ellipsizeMode`.
   */
  numberOfLines?: number;

  /**
   * Invoked on mount and layout changes with
   *
   * {nativeEvent: { layout: {x, y, width, height}}}.
   */
  onLayout?: (event: LayoutChangeEvent) => void;

  /**
   * Invoked on Text layout
   */
  onTextLayout?: (event: NativeSyntheticEvent<TextLayoutEventData>) => void;

  /**
   * This function is called on press.
   * Text intrinsically supports press handling with a default highlight state (which can be disabled with suppressHighlighting).
   */
  onPress?: (event: GestureResponderEvent) => void;

  /**
   * This function is called on long press.
   * e.g., `onLongPress={this.increaseSize}>``
   */
  onLongPress?: (event: GestureResponderEvent) => void;

  /**
   * @see https://reactnative.dev/docs/text#style
   */
  style?: StyleProp<TextStyle>;

  /**
   * Used to locate this view in end-to-end tests.
   */
  testID?: string;

  /**
   * Used to reference react managed views from native code.
   */
  nativeID?: string;

  /**
   * Specifies largest possible scale a font can reach when allowFontScaling is enabled. Possible values:
   * - null/undefined (default): inherit from the parent node or the global default (0)
   * - 0: no max, ignore parent/global default
   * - >= 1: sets the maxFontSizeMultiplier of this node to this value
   */
  maxFontSizeMultiplier?: number | null;
  children: ReactNode;
}
const A1Text = (props: TextProps) => {
  const {colors} = useTheme();

  const textStyle = StyleSheet.create({
    textStyle: {
      color: colors.textParagraph,
    },
  });

  const {style}: TextProps = props;
  return (
    <Text {...props} style={[textStyle.textStyle, style]}>
      {_get(props, 'children', '')}
    </Text>
  );
};

export default memo(A1Text);
