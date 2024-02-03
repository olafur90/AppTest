/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Keyboard, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { plotuThyngdStyles } from '../PlotuThyngd/PlotuThyngdStyles';
import { styles } from '../../styles';
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
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<ScrollView style={{backgroundColor: '#1878ab', paddingTop: 20}}>
				<View>
					<Text style={plotuThyngdStyles.plotuthyngd}>Reikna fjölda pílóra</Text>

					<View style={plotuThyngdStyles.inputContainer}>
						<TextInput
							keyboardType="numeric"
							style={plotuThyngdStyles.input}
							label={'Innanmál'}
							onChange={(text) => handleTextInputChange(text.nativeEvent.text, setInnanmalValue)}
						/><Text>mm</Text>
					</View>

					<View style={plotuThyngdStyles.inputContainer}>
						<TextInput
							keyboardType="numeric"
							style={plotuThyngdStyles.input}
							label={'Fjöldi pílóra'}
							onChange={(e) => handleTextInputChange(e.nativeEvent.text, setPilorafjoldiValue)}
						/><Text>mm</Text>
					</View>

					<View style={plotuThyngdStyles.inputContainer}>
						<TextInput
							keyboardType="numeric"
							style={plotuThyngdStyles.input}
							label={'Þykkt'}
							onChange={(e) => handleTextInputChange(e.nativeEvent.text, setEfnisthykktValue)}
						/><Text>mm</Text>
					</View>
				</View>

				{innanmalValue && pilorafjoldiValue && efnisthykktValue ? (
					<Text style={styles.sectionTitle}>
						Bil á milli pílóra: {reiknaBil(innanmalValue, pilorafjoldiValue, efnisthykktValue)} mm
					</Text>
				) : null}
			</ScrollView>
		</TouchableWithoutFeedback>
  );
}

const reiknaBil: (innanmal: number, pilorafjoldi: number, efnisthykkt: number) => string = (innanmal, pilorafjoldi, efnisthykkt) => {
  const summaPilora = pilorafjoldi * efnisthykkt;
  return ((innanmal - summaPilora) / (pilorafjoldi + 1)).toFixed(2);
};

export default Pilorabil;
