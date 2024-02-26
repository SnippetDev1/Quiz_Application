import {StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';
import React from 'react';
import {COLORS, IMAGES} from '../constants/theme';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  responsiveFontSize as rf,
} from '../common/responsiveFunction';

export default function CustomPostHeader() {
  return (
    <View
      style={[
        {
          height: hp('10%'),
          backgroundColor: COLORS.black,
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: COLORS.white,
          paddingTop: hp('1%'),
        },
      ]}>
      <TouchableOpacity>
        <Image style={styles.imageStyle} source={IMAGES.logo} />
      </TouchableOpacity>
      <Text style={styles.txt}>امام زمانہ(عج) کوئز ا یپلیکیشن</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    // fontFamily: FONTFAMILY.Bold,
    fontSize: rf(4),
    color: COLORS.white,
    alignSelf: 'center',
    fontFamily: 'Jameel_Noori',
    // fontFamily: 'Pak_Nastaleeq'
  },
  imageStyle: {
    height: 40,
    width: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
