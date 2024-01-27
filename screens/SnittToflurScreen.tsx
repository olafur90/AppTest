/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, Text, View, useWindowDimensions } from 'react-native';
import { useState } from 'react';
import { SceneMap, TabView } from 'react-native-tab-view';
import { styles } from '../styles';
import { DataTable } from 'react-native-paper';

function SnittToflurScreen(): React.JSX.Element {

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'M-Gróft'},
    {key: 'second', title: 'M-Fínt'},
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      style={{ backgroundColor: '#ffffff' }}
    />
  );
}

const FirstRoute = () => (
  <View>
    <ScrollView>
    <DataTable>
      <DataTable.Header style={{ backgroundColor: '#ffffff' }}>
        <DataTable.Title style={{ marginLeft: 20 }} textStyle={{ fontWeight: 'bold', fontSize: 24 }}>Nafnmál</DataTable.Title>
        <DataTable.Title style={{flexDirection: 'row-reverse'}} textStyle={{ fontWeight: 'bold', fontSize: 24 }}>Minnst</DataTable.Title>
        <DataTable.Title style={{ flexDirection: 'row-reverse'}} textStyle={{ fontWeight: 'bold', fontSize: 24 }}>Mest</DataTable.Title>
      </DataTable.Header>
      <DataTable.Row>
        <DataTable.Cell textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 4</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}}>3,242</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}}>3,422</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 4,5</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse' }}>3,688</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse' }}>3,878</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 5</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}}>4,134</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}}>4,334</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 6</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}}>4,917</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}}>5,153</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 7</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}}>5,917</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}}>6,153</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 8</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}}>6,647</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}}>6,912</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 9</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}}>7,647</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}}>7,912</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 10</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}}>8,376</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}}>8,676</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 11</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}}>9,376</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}}>9,676</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 12</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}}>10,106</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}}>10,441</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 14</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}}>11,835</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}}>12,210</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 16</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}}>13,835</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}}>14,210</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 18</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}}>15,294</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}}>15,744</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 20</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}}>17,294</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}}>17,744</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 22</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}}>19,294</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}}>19,744</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 24</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}}>20,752</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}}>21,252</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 27</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}}>23,752</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}}>24,252</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 30</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}}>26,211</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}}>26,771</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
    </ScrollView>
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

export default SnittToflurScreen;
