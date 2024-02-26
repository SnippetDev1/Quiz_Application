import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Quiz from './src/screens/Quiz';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './src/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      {/* <NavigationContainer> */}
      <MainNavigation />
      {/* </NavigationContainer> */}
    </SafeAreaProvider>
  );
};

export default App;
