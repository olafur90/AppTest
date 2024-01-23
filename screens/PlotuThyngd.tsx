/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from '../styles';

function PlotuThyngdScreen(): React.JSX.Element {
    const [breiddInputValue, setBreiddInputValue] = useState('');
    const [lengdInputValue, setLengdInputValue] = useState('');
    const [thykktInputValue, setThykktInputValue] = useState('');
    const [edlisThyngdInputValue, setEdlisThyngdInputValue] = useState('');

    return (
        <View>
            <Text style={styles.sectionTitle}>Lengd í millimetrum</Text>
            <TextInput
                keyboardType="numeric"
                style={styles.input}
                onChange={(e) => setLengdInputValue(e.nativeEvent.text)}
            />
            <Text style={styles.sectionTitle}>Breidd í millimetrum</Text>
            <TextInput
                keyboardType="numeric"
                style={styles.input}
                onChange={(e) => setBreiddInputValue(e.nativeEvent.text)}
            />
            <Text style={styles.sectionTitle}>Þykkt í millimetrum</Text>
            <TextInput
                keyboardType="numeric"
                style={styles.input}
                onChange={(e) => setThykktInputValue(e.nativeEvent.text)}
            />
            <Text style={styles.sectionTitle}>Eðlisþyngd</Text>
            <TextInput
                keyboardType="numeric"
                style={styles.input}
                onChange={(e) => setEdlisThyngdInputValue(e.nativeEvent.text)}
            />

            <Text style={styles.sectionTitle}>
                Þyngd plötu:
                {(thykktInputValue && breiddInputValue && lengdInputValue && edlisThyngdInputValue)
                ? (parseInt(breiddInputValue, 10) * parseInt(lengdInputValue, 10) * parseInt(thykktInputValue, 10) * parseInt(edlisThyngdInputValue, 10)) / 1000000 : 0} KG
            </Text>
        </View>
    );
}

export default PlotuThyngdScreen;
