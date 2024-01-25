/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from '../styles';
function UmmalHrings(): React.JSX.Element {
    const [thvermalValue, setThvermalValue] = useState(0);

    const handleTextInputChange = (value: string, setState: React.Dispatch<React.SetStateAction<number>>) => {
        const num = parseInt(value, 10);
        if (!isNaN(num)) {
            setState(num);
        }
    };

    return (
        <View>
            <View style={[{ width: '50%'}]}>
            <Text style={styles.sectionDescription}>Öll mál skulu vera í millimetrum</Text>

            <Text style={styles.sectionTitle}>Þvermál</Text>
            <TextInput
                keyboardType="numeric"
                style={styles.input}
                onChange={(text) => handleTextInputChange(text.nativeEvent.text, setThvermalValue)}
            />
            </View>

            {thvermalValue ? (
                <Text style={styles.sectionTitle}>
                    Ummál = {reiknaThvermal(thvermalValue)}
                </Text>
            ) : null}
        </View>
    );
}

const reiknaThvermal: (thvermal: number) => string = (thvermal) => {
    return ((thvermal / 2) * 2 * Math.PI).toFixed(2);
}

export default UmmalHrings;
