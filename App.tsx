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

const Stack = createStackNavigator<RootStackParamList>();

type RootStackParamList = {
  Home: undefined;
  PlotuThyngd: undefined;
};

const RenderDrawerContent = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View>
      <Text>Drawer contents</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Plötuþyngd" onPress={() => navigation.navigate('PlotuThyngd')} />
    </View>
  );
};

function App(): React.JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <NavigationContainer>
      <Drawer
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        renderDrawerContent={() => <RenderDrawerContent />}
      >
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="PlotuThyngd" component={ProfileScreen} />
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
