/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';


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

export const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#1878ab',
    color: '#000',
    paddingBottom: 500,
    paddingTop: 32,
    paddingHorizontal: 24,
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
  input: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    color: '#000',
    marginBottom: 12,
    marginLeft: 12,
    marginRight: 12,
    width: '40%',
   },
 });
