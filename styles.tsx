/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

export const dropdownStyles = StyleSheet.create({
  dropdownContainer: {
    marginTop: 32,
    marginLeft: 40,
    paddingHorizontal: 24,
  },
  dropdown: {
    borderWidth: 1,
    height: 40,
    margin: 'auto',
    width: '90%',
  },
});

export const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      marginLeft: 12,
      marginTop: 12,
    },
    sectionDescription: {
      fontSize: 18,
      fontWeight: '400',
      marginLeft: 12,
      marginTop: 8,
    },
    highlight: {
      fontWeight: '700',
    },
    button: {
      margin: 10,
      width: 50,
    },
    input: {
      borderWidth: 1,
      height: 40,
      marginLeft: 12,
      padding: 10,
    },
  });
