/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const dropdownStyles = StyleSheet.create({
 dropdownContainer: {
  color: '#000',
  alignSelf: 'center',
  marginTop: 32,
  paddingHorizontal: 24,
 },
 dropdown: {
  borderWidth: 1,
  height: 40,
 },
 iconStyle: {
    marginRight: 10,
    fontSize: 16,
    color: '#000',
} ,
});

export const plotuThyngdStyles = StyleSheet.create({
  totalPlotuThyngd: {
    color: '#000',
    fontSize: 24,
    fontWeight: '600',
    marginTop: 12,
    textAlign: 'center',
  },
  input: {
    color: '#000',
    borderWidth: 1,
    height: 40,
    marginLeft: 12,
    marginRight: 12,
    padding: 10,
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
})

export const styles = StyleSheet.create({
  sectionContainer: {
   marginTop: 32,
   paddingHorizontal: 24,
   color: '#000',
  },
  sectionTitle: {
   color: '#000',
   fontSize: 24,
   fontWeight: '600',
   marginLeft: 12,
   marginTop: 12,
  },
  sectionDescription: {
   color: '#000',
   fontSize: 18,
   fontWeight: '400',
   marginLeft: 12,
   marginTop: 8,
  },
  highlight: {
   color: '#000',
   fontWeight: '700',
  },
  button: {
   color: '#000',
   margin: 10,
   width: 50,
  },
 });
