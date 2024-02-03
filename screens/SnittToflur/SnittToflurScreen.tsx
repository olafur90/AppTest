/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { ScrollView, Text, View, useWindowDimensions } from 'react-native';
import { useState } from 'react';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { styles } from '../../styles';
import { DataTable } from 'react-native-paper';

function SnittToflurScreen(): React.JSX.Element {
	const [data, setData] = useState([]);
  const layout = useWindowDimensions();



  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'M-Gróft'},
    {key: 'second', title: 'M-Fínt'},
  ]);

	useEffect(() => {
		const x = async () => {
			const response = await fetch('https://mathollbackend-production.up.railway.app/flokkar/');
			const responseBody = await response.text(); // Get the response body as text
			const json = JSON.parse(responseBody); // Parse the text as JSON
			setData(json[0]);
			console.log(data);
		};

	}, [data]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={props => (
        <TabBar
          {...props}
          style={{ backgroundColor: '#444' }}
          renderLabel={({ route, focused, color }) => (
            <Text style={
              {
                color: focused ? color : 'gray',
                fontSize: 16,
                fontWeight: focused ? '400' : 'normal',
              }
            }>
              {route.title}
            </Text>
          )}
        />
      )}
      initialLayout={{ width: layout.width }}
      style={{ backgroundColor: '#dddddd' }}
    />
  );
}

const FirstRoute = () => (
  <View>
    <ScrollView>
    <DataTable>
      <DataTable.Header style={{ backgroundColor: '#1878ab', paddingTop: 10 }}>
        <DataTable.Title style={{ marginLeft: 20 }} textStyle={{ fontWeight: 'bold', fontSize: 24, color: 'white' }}>Nafnmál</DataTable.Title>
        <DataTable.Title style={{flexDirection: 'row-reverse'}} textStyle={{ fontWeight: 'bold', fontSize: 24, color: 'white' }}>Minnst</DataTable.Title>
        <DataTable.Title style={{ flexDirection: 'row-reverse'}} textStyle={{ fontWeight: 'bold', fontSize: 24, color: 'white' }}>Mest</DataTable.Title>
      </DataTable.Header>
      <DataTable.Row>
        <DataTable.Cell style={{marginLeft: 10}} textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 4</DataTable.Cell>
        <DataTable.Cell textStyle={{ fontWeight: 'bold', fontSize: 16 }} style={{flexDirection: 'row-reverse'}}>3,242</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}} textStyle={{ fontWeight: 'bold', fontSize: 16 }}>3,422</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={{marginLeft: 10}} textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 4,5</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}} textStyle={{ fontWeight: 'bold', fontSize: 16 }}>3,688</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}} textStyle={{ fontWeight: 'bold', fontSize: 16 }}>3,878</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={{marginLeft: 10}} textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 5</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}} textStyle={{ fontWeight: 'bold', fontSize: 16 }}>4,134</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}} textStyle={{ fontWeight: 'bold', fontSize: 16 }}>4,334</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={{marginLeft: 10}} textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 6</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}} textStyle={{ fontWeight: 'bold', fontSize: 16 }}>4,917</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}} textStyle={{ fontWeight: 'bold', fontSize: 16 }}>5,153</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={{marginLeft: 10}} textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 7</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}} textStyle={{ fontWeight: 'bold', fontSize: 16 }}>5,917</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}} textStyle={{ fontWeight: 'bold', fontSize: 16 }}>6,153</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={{marginLeft: 10}} textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 8</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}} textStyle={{ fontWeight: 'bold', fontSize: 16 }}>6,647</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}} textStyle={{ fontWeight: 'bold', fontSize: 16 }}>6,912</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={{marginLeft: 10}} textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 9</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}} textStyle={{ fontWeight: 'bold', fontSize: 16 }}>7,647</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}} textStyle={{ fontWeight: 'bold', fontSize: 16 }}>7,912</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={{marginLeft: 10}} textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 10</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}} textStyle={{ fontWeight: 'bold', fontSize: 16 }}>8,376</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}} textStyle={{ fontWeight: 'bold', fontSize: 16 }}>8,676</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={{marginLeft: 10}} textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 11</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}} textStyle={{ fontWeight: 'bold', fontSize: 16 }}>9,376</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}} textStyle={{ fontWeight: 'bold', fontSize: 16 }}>9,676</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={{marginLeft: 10}} textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 12</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}} textStyle={{ fontWeight: 'bold', fontSize: 16 }}>10,106</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}} textStyle={{ fontWeight: 'bold', fontSize: 16 }}>10,441</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={{marginLeft: 10}} textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 14</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}} textStyle={{ fontWeight: 'bold', fontSize: 16 }}>11,835</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}} textStyle={{ fontWeight: 'bold', fontSize: 16 }}>12,210</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={{marginLeft: 10}} textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 16</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}} textStyle={{ fontWeight: 'bold', fontSize: 16 }}>13,835</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}} textStyle={{ fontWeight: 'bold', fontSize: 16 }}>14,210</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={{marginLeft: 10}} textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 18</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}} textStyle={{ fontWeight: 'bold', fontSize: 16 }}>15,294</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}} textStyle={{ fontWeight: 'bold', fontSize: 16 }}>15,744</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={{marginLeft: 10}} textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 20</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}} textStyle={{ fontWeight: 'bold', fontSize: 16 }}>17,294</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}} textStyle={{ fontWeight: 'bold', fontSize: 16 }}>17,744</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={{marginLeft: 10}} textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 22</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}} textStyle={{ fontWeight: 'bold', fontSize: 16 }}>19,294</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}} textStyle={{ fontWeight: 'bold', fontSize: 16 }}>19,744</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={{marginLeft: 10}} textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 24</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}} textStyle={{ fontWeight: 'bold', fontSize: 16 }}>20,752</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}} textStyle={{ fontWeight: 'bold', fontSize: 16 }}>21,252</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={{marginLeft: 10}} textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 27</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}} textStyle={{ fontWeight: 'bold', fontSize: 16 }}>23,752</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}} textStyle={{ fontWeight: 'bold', fontSize: 16 }}>24,252</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={{marginLeft: 10}} textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 30</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}} textStyle={{ fontWeight: 'bold', fontSize: 16 }}>26,211</DataTable.Cell>
        <DataTable.Cell style={{flexDirection: 'row-reverse'}} textStyle={{ fontWeight: 'bold', fontSize: 16 }}>26,771</DataTable.Cell>
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
