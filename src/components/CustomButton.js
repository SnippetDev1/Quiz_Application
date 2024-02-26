import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
} from '../common/responsiveFunction';
import {COLORS, FONTFAMILY, STYLES} from '../constants/theme';

function CustomButtonwithBC({
  title,
  style,
  onPress,
  titleStyle,
  activeOpacity,
}) {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      activeOpacity={activeOpacity}
      onPress={onPress}>
      {/* <Text style={styles.txt}>{title}</Text> */}
      <Text style={[styles.txt, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    paddingVertical: hp('2%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    // fontFamily: FONTFAMILY.Bold,
    fontSize: rf(2),
    color: COLORS.white,
    textAlign: 'center',
  },
  svg: {
    position: 'absolute',
    left: 25,
  },
});

export default memo(CustomButtonwithBC);
