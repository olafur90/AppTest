/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from '../styles';
import SelectDropdown from 'react-native-select-dropdown';

function PlotuThyngdScreen(): React.JSX.Element {
    const [breiddInputValue, setBreiddInputValue] = useState(0);
    const [lengdInputValue, setLengdInputValue] = useState(0);
    const [thykktInputValue, setThykktInputValue] = useState(0);
    const [edlisThyngdInputValue, setEdlisThyngdInputValue] = useState(0);

    const plotutegundir = ['Svart', 'Ryðfrítt', 'Ál'];
    const plotutegundirToNumbers: Record<PlotutegundirKey, number> = {
        'Svart': 8,
        'Ryðfrítt': 8,
        'Ál': 2.7,
    };

    !edlisThyngdInputValue ? setEdlisThyngdInputValue(8) : edlisThyngdInputValue;

    type PlotutegundirKey = 'Svart' | 'Ryðfrítt' | 'Ál';

    return (
        <View style={[{ flexDirection: 'row', }]}>
            <View style={[{ width: '50%'}]}>
            <Text style={styles.sectionDescription}>Öll mál skulu vera í millimetrum</Text>

            <Text style={styles.sectionTitle}>Lengd</Text>
            <TextInput
                keyboardType="numeric"
                style={styles.input}
                onChange={(e) => setLengdInputValue(parseInt(e.nativeEvent.text, 10))}
            />
            <Text style={styles.sectionTitle}>Breidd</Text>
            <TextInput
                keyboardType="numeric"
                style={styles.input}
                onChange={(e) => setBreiddInputValue(parseInt(e.nativeEvent.text, 10))}
            />
            <Text style={styles.sectionTitle}>Þykkt</Text>
            <TextInput
                keyboardType="numeric"
                style={styles.input}
                onChange={(e) => setThykktInputValue(parseInt(e.nativeEvent.text, 10))}
            />
            <SelectDropdown
                defaultValue={plotutegundir[0]}
                data={plotutegundir}
                buttonStyle={styles.dropdown}
                onSelect={(selectedItem) => {
                    const key = selectedItem as PlotutegundirKey;
                    setEdlisThyngdInputValue(plotutegundirToNumbers[key]);
                }} />

            </View>

            <Text style={styles.sectionTitle}>
                Þyngd plötu:
                {(thykktInputValue && breiddInputValue && lengdInputValue && edlisThyngdInputValue)
                ? ' ' + reiknaPlotuThyngd(breiddInputValue, lengdInputValue, thykktInputValue, edlisThyngdInputValue) + ' KG' : ''}
            </Text>
        </View>
    );
}

function reiknaPlotuThyngd(breidd: number, lengd: number, thykkt: number, edlisThyngd: number): number {
    return (breidd * lengd * thykkt * edlisThyngd) / 1000000;
}

export default PlotuThyngdScreen;
