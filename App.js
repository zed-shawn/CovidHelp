import React, {useEffect} from 'react';
import MainStack from './src/navigation/MainNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {LogBox} from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import {Provider} from 'react-redux';
import store from './src/state/store';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as userActions from './src/state/userDetail';
import SplashScreen from 'react-native-splash-screen';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.user.loggedIn);
  const getLogin = async () => {
    const state = await AsyncStorage.getItem('loggedIn');
    if (state == 'true') {
      dispatch(userActions.loadUser());
    }
    SplashScreen.hide();
  };
  useEffect(() => {
    getLogin();
  }, []);

  return (
    <NavigationContainer>
      {loggedIn ? <MainStack /> : <LoginScreen />}
    </NavigationContainer>
  );
};
export default function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
