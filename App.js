import React from 'react';
import MainStack from './src/navigation/MainNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};
export default App;
