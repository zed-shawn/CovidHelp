import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        title: 'CovidHelp',
        headerTitleAlign: 'center',
      }}>
      <Drawer.Screen name="Feed" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        title: 'CovidHelp',
        headerStyle: {justifyContent: 'center'},
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
const Final = createStackNavigator();

const FinalStack = () => {
  return (
    <Final.Navigator>
      <Final.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <Final.Screen
        name="MainStack"
        component={MainStack}
        //options={{headerShown: false}}
      />
    </Final.Navigator>
  );
};
export default FinalStack;
