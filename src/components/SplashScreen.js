import React, {memo, useEffect} from 'react';
import {StyleSheet, View, Image, Modal, Text} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../common/responsiveFunction';
import {COLORS, FONTFAMILY, IMAGES, SCREENS} from '../constants/theme';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: SCREENS.WelcomeScreen}],
        }),
      );
    }, 4000);
  }, []);
  return (
    <View style={styles.animationContainer}>
      <Image style={styles.imageStyle} source={IMAGES.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: COLORS.black,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    // fontFamily: FONTFAMILY.Bold,
    fontSize: rf(5),
    color: COLORS.white,
  },
  imageStyle: {
    height: '20%',
    width: '100%',
    resizeMode: 'contain',
  },
});
