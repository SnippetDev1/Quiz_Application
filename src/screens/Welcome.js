import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../constants';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../constants/theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {responsiveFontSize as rf} from '../common/responsiveFunction';

export default function Welcome() {
  const navigation = useNavigation();
  // console.log(navigation);

  const goToQuiz = () => {
    navigation.replace(SCREENS.QuizScreen);
  };

  return (
    <View style={styles.Container}>
      <View style={styles.subContainer}>
        <Text style={styles.txt}>Daily Quiz</Text>
        <FontAwesome
          style={styles.icon}
          name={'question-circle'}
          size={rf(50)}
          color={COLORS.white}
        />
      </View>
      <CustomButton
        activeOpacity={0.8}
        onPress={goToQuiz}
        style={styles.btn}
        title={'Start Quiz'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.black,
  },
  btn: {
    margin: 10,
    width: '95%',
    height: '8%',
    borderRadius: 4,
  },
  subContainer: {
    width: '95%',
    margin: 10,
    height: '80%',
    backgroundColor: COLORS.primary,
    borderRadius: 4,
  },
  icon: {
    alignSelf: 'center',
  },
  txt: {
    fontSize: rf(4),
    alignSelf: 'center',
    fontWeight: 'bold',
    color: COLORS.white,
    marginTop: rf(10),
  },
});
