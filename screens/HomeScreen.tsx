/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Alert, Button, Text, TextInput, View, useWindowDimensions } from 'react-native';
import { useEffect, useState } from 'react';
import { SceneMap, TabView } from 'react-native-tab-view';
import { styles } from '../styles';

function HomeScreen(): React.JSX.Element {

    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'first', title: 'First'},
        {key: 'second', title: 'Second'},
    ]);

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
        />
    );
}

const FirstRoute = () => (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>First</Text>
      <Text style={styles.sectionDescription}>
        Edit <Text style={styles.highlight}>App.tsx</Text> to change this
        screen and then come back to see your edits.
      </Text>
      <TextInput id="prufa" style={{ height: 40, borderColor: 'gray', borderWidth: 2 }} />
      <Button // Alert with id from TextInput above
        title="Alert"
        onPress={() => Alert.alert('Alert Title', 'My Alert Msg', [
          { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
          { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ])}
      />
    </View>
  );

  const SecondRoute = () => (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Second</Text>
      <Text style={styles.sectionDescription}>
        Edit <Text style={styles.highlight}>App.tsx</Text> to change this
        screen and then come back to see your edits.
      </Text>
    </View>
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

export default HomeScreen;
