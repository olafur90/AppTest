/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';

import {
 Button,
 Text,
 useColorScheme,
 View,
} from 'react-native';

import { Drawer } from 'react-native-drawer-layout';
import {
 Colors,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/PlotuThyngd';
import Hornamal from './screens/Hornamal';
import Pilorabil from './screens/Pilorabil';
import UmmalHrings from './screens/UmmalHrings';

const Stack = createStackNavigator<RootStackParamList>();

/* TODO:
 Þvermál hrings: T.d. ef með 1000 pípu, þá er þvermálið 1000
 og ummálið r^2 * pí = 1000 * 1000 * 3.14
*/

type RootStackParamList = {
 SnittToflur: undefined;
 PlotuThyngd: undefined;
 Hornamal: undefined;
 Pilorabil: undefined;
 UmmalHrings: undefined;
};

type RenderDrawerContentProps = {
 closeDrawer: () => void;
}

const RenderDrawerContent = ({ closeDrawer }: RenderDrawerContentProps) => {
 const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

 const navigateAndCloseDrawer = (screen: keyof RootStackParamList) => {
  closeDrawer();
  navigation.navigate(screen);
 };

 return (
  <View>
   <Button title="Snitttöflur" onPress={() => navigateAndCloseDrawer('SnittToflur')} />
   <Button title="Reikna Plötuþyngd" onPress={() => navigateAndCloseDrawer('PlotuThyngd')} />
   <Button title="Hornamál" onPress={() => navigateAndCloseDrawer('Hornamal')} />
   <Button title="Pílórabil" onPress={() => navigateAndCloseDrawer('Pilorabil')} />
   <Button title="Ummál hrings" onPress={() => navigateAndCloseDrawer('UmmalHrings')} />
  </View>
 );
};

function App(): React.JSX.Element {
 const [open, setOpen] = useState(false);

 const closeDrawer = () => {
  setOpen(false);
 };

 return (
  <NavigationContainer>
   <Drawer
    open={open}
    onOpen={() => setOpen(true)}
    onClose={() => setOpen(false)}
    renderDrawerContent={() => <RenderDrawerContent closeDrawer={closeDrawer} />}
   >
    <Stack.Navigator initialRouteName="SnittToflur">
     <Stack.Screen name="SnittToflur" component={HomeScreen} />
     <Stack.Screen name="PlotuThyngd" component={ProfileScreen} />
     <Stack.Screen name="Hornamal" component={Hornamal} />
     <Stack.Screen name="Pilorabil" component={Pilorabil} />
     <Stack.Screen name="UmmalHrings" component={UmmalHrings} />
    </Stack.Navigator>
   </Drawer>
   <Button
    title={open ? 'Close drawer' : 'Open drawer'}
    onPress={() => open ? setOpen(false) : setOpen(true)}
   />
  </NavigationContainer>
 );
}

export default App;
