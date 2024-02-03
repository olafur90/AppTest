/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native';
import { useEffect, useState } from 'react';
import { styles } from '../../styles';
import { TextInput } from 'react-native-paper';
import { BilMilliGataStyles } from './BilMilliGataStyles';

function BilMilliGata(): React.JSX.Element {
  const [fjoldiGata, setFjoldiGata] = useState(0);
	const [heildarMal, setHeildarMal] = useState(0);
	const [fyrstaGat, setFyrstaGat] = useState(0);

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<View style={styles.sectionContainer}>
				<Text style={BilMilliGataStyles.header}>Reikna út bil á milli gata</Text>
				<TextInput
					keyboardType="numeric"
					style={styles.input}
					label="Heildarmál"
					onChange={(e) => setHeildarMal(parseInt(e.nativeEvent.text, 10))}
				/>

				<TextInput
					keyboardType="numeric"
					style={styles.input}
					label={'Fjöldi gata'}
					onChange={(e) => setFjoldiGata(parseInt(e.nativeEvent.text, 10))}
				/>

				<TextInput
					keyboardType="numeric"
					style={styles.input}
					label="Fyrsta gat"
					onChange={(e) => setFyrstaGat(parseInt(e.nativeEvent.text, 10))}
				/><Text style={{ fontSize: 16, marginBottom: 12, color: 'white', textAlign: 'center'}}>*Fyrsta gat hefur sama mál frá sitthvorum enda</Text>

				<Text>
					{fjoldiGata && heildarMal ? (
						<Text style={styles.sectionTitle}>
							Bil á milli gata: {reiknaBil(fyrstaGat, fjoldiGata, heildarMal).toFixed(1)} mm
						</Text>
					) : null}
				</Text>
			</View>
		</TouchableWithoutFeedback>
	);
 }

function reiknaBil(fyrstaGat: number, fjoldiGata: number, heildarMal: number): number {
	if (fyrstaGat) {
		fjoldiGata -= 2;
	} else {
		fyrstaGat = 0;
	}
	return ((heildarMal - (fyrstaGat * 2)) / (fjoldiGata + 1));
}

export default BilMilliGata;
