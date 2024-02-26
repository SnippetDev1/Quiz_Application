import React, {useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { SCREENS } from '../constants/theme';
import SplashScreen from '../components/SplashScreen';
import { Quiz } from '../screens';
import {
    heightPercentageToDP as hp,
    responsiveFontSize as rf,
    widthPercentageToDP as wp,
  } from '../common/responsiveFunction';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../screens/Welcome';

const Stack = createNativeStackNavigator();

function MainNavigation() {
    const ref = useRef();
  return (
    <NavigationContainer independent={true} ref={ref}>
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
          headerShown: false,
          headerTitleStyle: {
            fontSize: rf(1.8),
          },
        }}
        initialRouteName={SCREENS.SplashScreen}>
        <Stack.Screen
          name={SCREENS.SplashScreen}
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={SCREENS.QuizScreen}
          component={Quiz}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={SCREENS.WelcomeScreen}
          component={Welcome}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;