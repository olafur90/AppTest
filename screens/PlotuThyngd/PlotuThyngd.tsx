/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Image, Keyboard, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import { dropdownStyles } from '../../styles';
import SelectDropdown from 'react-native-select-dropdown';
import { TextInput } from 'react-native-paper';
import { plotuThyngdStyles } from './PlotuThyngdStyles';

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
    } else {
      setState(0);
    }
  };

  return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<ScrollView style={plotuThyngdStyles.scrollViewBackground}>
					<Text style={plotuThyngdStyles.plotuthyngd}>Reikna Plötuþyngd</Text>
					<View style={plotuThyngdStyles.inputContainer}>
						<TextInput
								keyboardType="numeric"
								style={plotuThyngdStyles.input}
								label="Lengd"
								onChange={(text) => handleTextInputChange(text.nativeEvent.text, setLengdInputValue)}
						/><Text>mm</Text>
					</View>

					<View style={plotuThyngdStyles.inputContainer}>
						<TextInput
								keyboardType="numeric"
								style={plotuThyngdStyles.input}
								label="Breidd"
								onChange={(e) => handleTextInputChange(e.nativeEvent.text, setBreiddInputValue)}
						/><Text>mm</Text>
					</View>

					<View style={plotuThyngdStyles.inputContainer}>
						<TextInput
								keyboardType="numeric"
								style={plotuThyngdStyles.input}
								label="Þykkt"
								onChange={(e) => handleTextInputChange(e.nativeEvent.text, setThykktInputValue)}
						/><Text>mm</Text>
					</View>

					{/* dropdown */}
					<View style={dropdownStyles.dropdownContainer}>
							<SelectDropdown
							defaultValue={plotutegundir[0]}
							data={plotutegundir}
							buttonStyle={dropdownStyles.dropdown}
							renderDropdownIcon={() => <Text style={dropdownStyles.iconStyle}>▼</Text>}
							dropdownIconPosition="right"
							onSelect={(selectedItem) => {
									const key = selectedItem as PlotutegundirKey;
									setEdlisThyngdInputValue(plotutegundirToNumbers[key]);
							}} />
					</View>
					{/* end dropdown */}

				{breiddInputValue !== 0 && lengdInputValue !== 0 && thykktInputValue !== 0 ? (
					<Text style={plotuThyngdStyles.totalPlotuThyngd}>
						Þyngd plötu: {reiknaPlotuThyngd(breiddInputValue, lengdInputValue, thykktInputValue, edlisThyngdInputValue)} KG
					</Text>
				) : null}

				<Image source={require('../../img/steel_plate.png')} style={plotuThyngdStyles.plotuMynd}/>
			</ScrollView>
		</TouchableWithoutFeedback>
  );
}

function reiknaPlotuThyngd(breidd: number, lengd: number, thykkt: number, edlisThyngd: number): string {
  return ((breidd * lengd * thykkt * edlisThyngd) / 1000000).toFixed(2);
}

export default PlotuThyngdScreen;
