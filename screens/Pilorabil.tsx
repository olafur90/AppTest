/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from '../styles';
function Pilorabil(): React.JSX.Element {
  const [innanmalValue, setInnanmalValue] = useState(0);
  const [pilorafjoldiValue, setPilorafjoldiValue] = useState(0);
  const [efnisthykktValue, setEfnisthykktValue] = useState(0);

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

      <Text style={styles.sectionTitle}>Innanmál</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        onChange={(text) => handleTextInputChange(text.nativeEvent.text, setInnanmalValue)}
      />
      <Text style={styles.sectionTitle}>Fjöldi pílóra</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        onChange={(e) => handleTextInputChange(e.nativeEvent.text, setPilorafjoldiValue)}
      />
      <Text style={styles.sectionTitle}>Þykkt</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        onChange={(e) => handleTextInputChange(e.nativeEvent.text, setEfnisthykktValue)}
      />
      </View>

      {innanmalValue && pilorafjoldiValue && efnisthykktValue ? (
        <Text style={styles.sectionTitle}>
          Bil á milli pílóra: {reiknaBil(innanmalValue, pilorafjoldiValue, efnisthykktValue)} mm
        </Text>
      ) : null}
    </View>
  );
}

const reiknaBil: (innanmal: number, pilorafjoldi: number, efnisthykkt: number) => string = (innanmal, pilorafjoldi, efnisthykkt) => {
  const summaPilora = pilorafjoldi * efnisthykkt;
  return ((innanmal - summaPilora) / (pilorafjoldi + 1)).toFixed(2);
};

export default Pilorabil;
