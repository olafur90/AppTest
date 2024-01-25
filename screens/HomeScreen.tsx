/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Alert, Button, ScrollView, Text, TextInput, View, useWindowDimensions } from 'react-native';
import { useEffect, useState } from 'react';
import { SceneMap, TabView } from 'react-native-tab-view';
import { styles } from '../styles';
import { DataTable, PaperProvider, DefaultTheme } from 'react-native-paper';

function HomeScreen(): React.JSX.Element {

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
            style={{ backgroundColor: '#dee' }}
        />
    );
}

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#da1',
        accent: '#fff',
    },
}


const FirstRoute = () => (
    <View>
        <ScrollView>
        <DataTable>
            <DataTable.Header style={{ backgroundColor: '#faf' }}>
                <DataTable.Title textStyle={{ fontWeight: 'bold', fontSize: 24 }}>Nafnmál</DataTable.Title>
                <DataTable.Title textStyle={{ fontWeight: 'bold', fontSize: 24 }}>Bor Minnst</DataTable.Title>
                <DataTable.Title textStyle={{ fontWeight: 'bold', fontSize: 24 }}>Bor Mest</DataTable.Title>
            </DataTable.Header>
            <DataTable.Row>
                <DataTable.Cell textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 1</DataTable.Cell>
                <DataTable.Cell>0,729</DataTable.Cell>
                <DataTable.Cell>0,785</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 1,1</DataTable.Cell>
                <DataTable.Cell>0,829</DataTable.Cell>
                <DataTable.Cell>0,885</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 1,2</DataTable.Cell>
                <DataTable.Cell>0,929</DataTable.Cell>
                <DataTable.Cell>0,985</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 1,4</DataTable.Cell>
                <DataTable.Cell>1,075</DataTable.Cell>
                <DataTable.Cell>1,160</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 1,6</DataTable.Cell>
                <DataTable.Cell>1,221</DataTable.Cell>
                <DataTable.Cell>1,321</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 1,8</DataTable.Cell>
                <DataTable.Cell>1,421</DataTable.Cell>
                <DataTable.Cell>1,521</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 2</DataTable.Cell>
                <DataTable.Cell>1,567</DataTable.Cell>
                <DataTable.Cell>1,679</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 2,2</DataTable.Cell>
                <DataTable.Cell>1,713</DataTable.Cell>
                <DataTable.Cell>1,838</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M (2,3)</DataTable.Cell>
                <DataTable.Cell>1,867</DataTable.Cell>
                <DataTable.Cell>1,979</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 2,5</DataTable.Cell>
                <DataTable.Cell>2,013</DataTable.Cell>
                <DataTable.Cell>2,138</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M (2,6)</DataTable.Cell>
                <DataTable.Cell>2,113</DataTable.Cell>
                <DataTable.Cell>2,238</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 3</DataTable.Cell>
                <DataTable.Cell>2,459</DataTable.Cell>
                <DataTable.Cell>2,599</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 3,5</DataTable.Cell>
                <DataTable.Cell>2,850</DataTable.Cell>
                <DataTable.Cell>3,010</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 4</DataTable.Cell>
                <DataTable.Cell>3,242</DataTable.Cell>
                <DataTable.Cell>3,422</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 4,5</DataTable.Cell>
                <DataTable.Cell>3,688</DataTable.Cell>
                <DataTable.Cell>3,878</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 5</DataTable.Cell>
                <DataTable.Cell>4,134</DataTable.Cell>
                <DataTable.Cell>4,334</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 6</DataTable.Cell>
                <DataTable.Cell>4,917</DataTable.Cell>
                <DataTable.Cell>5,153</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 7</DataTable.Cell>
                <DataTable.Cell>5,917</DataTable.Cell>
                <DataTable.Cell>6,153</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 8</DataTable.Cell>
                <DataTable.Cell>6,647</DataTable.Cell>
                <DataTable.Cell>6,912</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 9</DataTable.Cell>
                <DataTable.Cell>7,647</DataTable.Cell>
                <DataTable.Cell>7,912</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 10</DataTable.Cell>
                <DataTable.Cell>8,376</DataTable.Cell>
                <DataTable.Cell>8,676</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell textStyle={{ fontWeight: 'bold', fontSize: 18 }}>M 11</DataTable.Cell>
                <DataTable.Cell>9,376</DataTable.Cell>
                <DataTable.Cell>9,676</DataTable.Cell>
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

export default HomeScreen;
