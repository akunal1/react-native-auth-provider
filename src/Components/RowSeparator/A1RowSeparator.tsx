import React, {memo} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {Spacing} from '../../Themes';
import {useTheme} from '../../Themes/ThemeProvider';

interface Props {
  style?: StyleProp<ViewStyle>;
}

const A1RowSeparator = (prop: Props) => {
  const {colors} = useTheme();

  const rowStyle = StyleSheet.create({
    rowDividerStyle: {
      borderTopWidth: Spacing.half,
      borderColor: colors.rowSeparator,
      width: '100%',
      justifyContent: 'center',
      alignContent: 'center',
      marginTop: Spacing.small,
    },
  });

  const {style}: Props = prop;
  return <View style={[rowStyle.rowDividerStyle, style]} />;
};

export default memo(A1RowSeparator);
