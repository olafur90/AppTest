/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native';
import { useEffect, useState } from 'react';
import { styles } from '../../styles';
import { TextInput } from 'react-native-paper';

function Hornamal(): React.JSX.Element {
  const [baseValue, setBaseValue] = useState(0);
	const [altitudeValue, setAltitudeValue] = useState(0);

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<View style={styles.sectionContainer}>
				<Image source={require('../../img/triangle.png')} style={{ marginBottom: 30, alignSelf: 'center', width: 200, height: 180}} />
				<TextInput
					keyboardType="numeric"
					style={styles.input}
					label="Lengd a"
					onChange={(e) => setAltitudeValue(parseInt(e.nativeEvent.text, 10))}
					/>
				<TextInput
					keyboardType="numeric"
					style={styles.input}
					label={'Lengd b'}
					onChange={(e) => setBaseValue(parseInt(e.nativeEvent.text, 10))}
					/>

					{baseValue > 0 && altitudeValue > 0 ? <Text style={styles.sectionTitle}>
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
		</TouchableWithoutFeedback>
	);
 }

export default Hornamal;
