/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, Text, TextInput, View, useWindowDimensions } from 'react-native';
import { useEffect, useState } from 'react';
import { SceneMap, TabView } from 'react-native-tab-view';
import { styles } from '../styles';

const FirstRoute = () => {
 const [baseValue, setBaseValue] = useState(0);
 const [altitudeValue, setAltitudeValue] = useState(0);

 return (
 <View style={styles.sectionContainer}>
  <Image src="https://cdn1.byjus.com/wp-content/uploads/2020/02/Pythagoras-Theorem-1.png" style={{ width: 200, height: 200 }} />
  <Text style={styles.sectionTitle}>Lengd a</Text>
  <TextInput
   keyboardType="numeric"
   style={styles.input}
   onChange={(e) => setAltitudeValue(parseInt(e.nativeEvent.text, 10))}
   />
  <Text style={styles.sectionTitle}>Lengd b</Text>
  <TextInput
   keyboardType="numeric"
   style={styles.input}
   onChange={(e) => setBaseValue(parseInt(e.nativeEvent.text, 10))}
   />

   {baseValue && altitudeValue ? <Text style={styles.sectionTitle}>
    Lengd c = {Math.sqrt(baseValue ** 2 + altitudeValue ** 2).toFixed(2)}
   </Text> : null}

   {baseValue && !altitudeValue ? <Text style={styles.sectionTitle}>
    Sláðu inn lengd á hlið a
   </Text> : null}

   {!baseValue && altitudeValue ? <Text style={styles.sectionTitle}>
    Sláðu inn lengd á hlið b
   </Text> : null}

   {!baseValue && !altitudeValue ? <Text style={styles.sectionTitle}>
    Sláðu inn lengdir á hliðum a og b
   </Text> : null}

 </View>
 );
};

function Hornamal(): React.JSX.Element {
  const [baseValue, setBaseValue] = useState(0);

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

export default Hornamal;
