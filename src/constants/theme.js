import {Dimensions, View} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: '#252c4a',
  secondary: '#1E90FF',
  accent: '#3498db',

  success: '#00C851',
  error: '#ff4444',

  black: '#171717',
  white: '#FFFFFF',
  background: '#252C4A',
};

/* * Screens * */
export const SCREENS = {
  SplashScreen: 'SplashScreen',
  QuizScreen: 'QuizScreen',
  WelcomeScreen: 'WelcomeScreen',
};

export const SIZES = {
  base: 10,
  width,
  height,
};

export const IMAGES = {
  logo: require('../assets/images/logo.png'),
};

export const SPACER = ({size}) => {
  return <View style={{width: size, height: size}} />;
};
