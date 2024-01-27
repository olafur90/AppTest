/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';

import {
 Button,
 Text,
 View,
} from 'react-native';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screens/SnittToflurScreen';
import ProfileScreen from './screens/PlotuThyngd';
import Hornamal from './screens/Hornamal';
import Pilorabil from './screens/Pilorabil';
import UmmalHrings from './screens/UmmalHrings';

const Stack = createStackNavigator<RootStackParamList>();

const Drawer = createDrawerNavigator<RootStackParamList>();

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Snitttöflur">
      <Drawer.Screen name="Snitttöflur" component={HomeScreen} options={{ title: 'Snitt töflur'}} />
      <Drawer.Screen name="PlotuThyngd" component={ProfileScreen} />
      <Drawer.Screen name="Hornamal" component={Hornamal} />
      <Drawer.Screen name="Pilorabil" component={Pilorabil} />
      <Drawer.Screen name="UmmalHrings" component={UmmalHrings} />
    </Drawer.Navigator>
  )
}

type RootStackParamList = {
 Snitttöflur: undefined;
 PlotuThyngd: undefined;
 Hornamal: undefined;
 Pilorabil: undefined;
 UmmalHrings: undefined;
};

function App(): React.JSX.Element {
 const [open, setOpen] = useState(false);

 const closeDrawer = () => {
  setOpen(false);
 };

 return (
  <NavigationContainer onStateChange={() => setOpen(false)}>
   <DrawerNavigator />
  </NavigationContainer>
 );
}

export default App;
