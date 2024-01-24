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

const Stack = createStackNavigator<RootStackParamList>();

type RootStackParamList = {
  Home: undefined;
  PlotuThyngd: undefined;
  Hornamal: undefined;
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
      <Button title="Home" onPress={() => navigateAndCloseDrawer('Home')} />
      <Button title="Reikna Plötuþyngd" onPress={() => navigateAndCloseDrawer('PlotuThyngd')} />
      <Button title="Hornamál" onPress={() => navigateAndCloseDrawer('Hornamal')} />
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
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="PlotuThyngd" component={ProfileScreen} />
          <Stack.Screen name="Hornamal" component={Hornamal} />
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
