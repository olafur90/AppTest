import {Dimensions, StyleSheet} from 'react-native';
const windowWidth = Dimensions.get('window').width;

export const plotuThyngdStyles = StyleSheet.create({
	plotuthyngd: {
		color: '#000',
		fontSize: 24,
		fontWeight: '600',
		marginBottom: 12,
		textAlign: 'center',
	},
	totalPlotuThyngd: {
		color: '#000',
		fontSize: 24,
		fontWeight: '600',
		marginTop: 12,
		textAlign: 'center',
	},
	input: {
		color: '#000',
		marginLeft: 12,
		marginRight: 12,
		width: '40%',
	},
	inputContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		marginTop: 5,
	},
	sectionTitle: {
		color: '#fff',
		fontSize: 24,
		fontWeight: '600',
		marginTop: 12,
		marginLeft: windowWidth / 2 - 96,
	},
	scrollViewBackground: {
		backgroundColor: '#1878ab',
		paddingTop: 20,
	},
	plotuMynd: {
		alignSelf: 'center',
		marginTop: 40,
	},
});
