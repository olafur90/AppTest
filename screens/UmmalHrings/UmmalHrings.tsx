/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Keyboard, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { plotuThyngdStyles } from '../PlotuThyngd/PlotuThyngdStyles';
function UmmalHrings(): React.JSX.Element {
  const [thvermalValue, setThvermalValue] = useState(0);

  const handleTextInputChange = (value: string, setState: React.Dispatch<React.SetStateAction<number>>) => {
    const num = parseInt(value, 10);
    if (!isNaN(num)) {
      setState(num);
    } else {
			setState(0);
		}
  };

  return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<ScrollView style={{backgroundColor: '#1878ab', paddingTop: 20}}>
				<View>
					<Text style={plotuThyngdStyles.plotuthyngd}>Reikna ummál hrings/pípu</Text>
					<View style={plotuThyngdStyles.inputContainer}>
						<TextInput
							keyboardType="numeric"
							style={plotuThyngdStyles.input}
							label={'Þvermál'}
							onChange={(text) => handleTextInputChange(text.nativeEvent.text, setThvermalValue)}
							/><Text>mm</Text>
					</View>
				</View>

				{thvermalValue !== 0 ? (
					<Text style={ plotuThyngdStyles.plotuthyngd}>
						Ummál = {reiknaThvermal(thvermalValue)}
					</Text>
				) : null}
			</ScrollView>
		</TouchableWithoutFeedback>
  );
}

const reiknaThvermal: (thvermal: number) => string = (thvermal) => {
  return ((thvermal / 2) * 2 * Math.PI).toFixed(2);
};

export default UmmalHrings;
