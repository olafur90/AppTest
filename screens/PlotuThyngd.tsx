/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { dropdownStyles, styles } from '../styles';
import SelectDropdown from 'react-native-select-dropdown';

type PlotutegundirKey = 'Svart' | 'Ryðfrítt' | 'Ál';

function PlotuThyngdScreen(): React.JSX.Element {
  const [breiddInputValue, setBreiddInputValue] = useState(0);
  const [lengdInputValue, setLengdInputValue] = useState(0);
  const [thykktInputValue, setThykktInputValue] = useState(0);
  const [edlisThyngdInputValue, setEdlisThyngdInputValue] = useState(8);

  const plotutegundir = ['Svart', 'Ryðfrítt', 'Ál'];
  const plotutegundirToNumbers: Record<PlotutegundirKey, number> = {
    'Svart': 8,
    'Ryðfrítt': 8,
    'Ál': 2.7,
  };

  const handleTextInputChange = (value: string, setState: React.Dispatch<React.SetStateAction<number>>) => {
    const num = parseInt(value, 10);
    if (!isNaN(num)) {
      setState(num);
    }
  };

  return (
    <View>
      <View>
        <Text style={styles.sectionTitle}>Lengd</Text>
        <TextInput
            keyboardType="numeric"
            style={styles.input}
            onChange={(text) => handleTextInputChange(text.nativeEvent.text, setLengdInputValue)}
        />
        <Text style={styles.sectionTitle}>Breidd</Text>
        <TextInput
            keyboardType="numeric"
            style={styles.input}
            onChange={(e) => handleTextInputChange(e.nativeEvent.text, setBreiddInputValue)}
        />
        <Text style={styles.sectionTitle}>Þykkt</Text>
        <TextInput
            keyboardType="numeric"
            style={styles.input}
            onChange={(e) => handleTextInputChange(e.nativeEvent.text, setThykktInputValue)}
        />

        <View style={dropdownStyles.dropdownContainer}>
            <SelectDropdown
            defaultValue={plotutegundir[0]}
            data={plotutegundir}
            buttonStyle={dropdownStyles.dropdown}
            onSelect={(selectedItem) => {
                const key = selectedItem as PlotutegundirKey;
                setEdlisThyngdInputValue(plotutegundirToNumbers[key]);
            }} />
      </View>
      </View>

      {breiddInputValue && lengdInputValue && thykktInputValue && edlisThyngdInputValue ? (
        <Text style={styles.sectionTitle}>
          Þyngd plötu: {reiknaPlotuThyngd(breiddInputValue, lengdInputValue, thykktInputValue, edlisThyngdInputValue)} KG
        </Text>
      ) : null}
    </View>
  );
}

function reiknaPlotuThyngd(breidd: number, lengd: number, thykkt: number, edlisThyngd: number): number {
  return (breidd * lengd * thykkt * edlisThyngd) / 1000000;
}

export default PlotuThyngdScreen;
