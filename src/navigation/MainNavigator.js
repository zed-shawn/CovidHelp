import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ItemDetailsScreen from '../screens/ItemDetailsScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={ItemDetailsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        title: 'CovidHelp',
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#e6e640',
        },
        headerRight: () => (
          <View style={{paddingRight: '5%'}}>
            <Icon name="shopping-cart" size={20} color={'white'} />
          </View>
        ),
      }}>
      <Drawer.Screen name="Stack" component={MainStack} />
    </Drawer.Navigator>
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
export default DrawerNavigator;
