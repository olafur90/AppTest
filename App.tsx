/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import 'react-native-gesture-handler';
import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screens/SnittToflur/SnittToflurScreen';
import ProfileScreen from './screens/PlotuThyngd/PlotuThyngd';
import Hornamal from './screens/Hornamal/Hornamal';
import Pilorabil from './screens/Pilorabil/Pilorabil';
import UmmalHrings from './screens/UmmalHrings/UmmalHrings';
import BilMilliGata from './screens/BilMilliGata/BilMilliGata';

const Drawer = createDrawerNavigator<RootStackParamList>();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#1878ab' },
        headerTintColor: '#fff',
        drawerActiveBackgroundColor: '#1878ab',
        drawerActiveTintColor: '#fff' }}
        initialRouteName="Snitttöflur"
    >
      <Drawer.Screen name="Snitttöflur" component={HomeScreen} options={{ title: 'Snitt töflur'}} />
      <Drawer.Screen name="PlotuThyngd" component={ProfileScreen} options={{ title: 'Plötuþyngd'}}/>
      <Drawer.Screen name="Hornamal" component={Hornamal} options={{ title: 'Hornamál'}} />
      <Drawer.Screen name="Pilorabil" component={Pilorabil} options={{ title: 'Pílórabil'}}/>
      <Drawer.Screen name="UmmalHrings" component={UmmalHrings} options={{ title: 'Ummál pípu'}} />
			<Drawer.Screen name="BilMilliGata" component={BilMilliGata} options={{ title: 'Bil milli gata'}} />
    </Drawer.Navigator>
  );
}

type RootStackParamList = {
 Snitttöflur: undefined;
 PlotuThyngd: undefined;
 Hornamal: undefined;
 Pilorabil: undefined;
 UmmalHrings: undefined;
 BilMilliGata: undefined;
};

function App(): React.JSX.Element {
 const [open, setOpen] = useState(false);



 return (
  <NavigationContainer onStateChange={() => setOpen(false)}>
   <DrawerNavigator />
  </NavigationContainer>
 );
}

export default App;
