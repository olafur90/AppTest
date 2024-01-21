/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  useWindowDimensions,
  View,
} from 'react-native';
import { Drawer } from 'react-native-drawer-layout';
import { SceneMap, TabView } from 'react-native-tab-view';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const FirstRoute = () => (
  <View style={styles.sectionContainer}>
    <Text style={styles.sectionTitle}>First</Text>
    <Text style={styles.sectionDescription}>
      Edit <Text style={styles.highlight}>App.tsx</Text> to change this
      screen and then come back to see your edits.
    </Text>
    <TextInput id='prufa' style={{ height: 40, borderColor: 'gray', borderWidth: 2 }} />
    <Button // Alert with id from TextInput above
      title="Alert"
      onPress={() => Alert.alert('Alert Title', 'My Alert Msg', [
        { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ])}
    />
  </View>
)

const SecondRoute = () => (
  <View style={styles.sectionContainer}>
    <Text style={styles.sectionTitle}>Second</Text>
    <Text style={styles.sectionDescription}>
      Edit <Text style={styles.highlight}>App.tsx</Text> to change this
      screen and then come back to see your edits.
    </Text>
  </View>
)

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute
});

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const layout = useWindowDimensions();

  const [open, setOpen] = useState(false);

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);
  
  return (
    <Drawer
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderDrawerContent={() => {
        return <Text>Drawer contents</Text>
      }}

    >
      <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
    <Button
        onPress={() => setOpen((prevOpen) => !prevOpen)}
        title={`${open ? 'Close' : 'Open'} drawer`}
      />
  </Drawer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  button: {
    margin: 10,
    width: 50,
  }
});

export default App;
