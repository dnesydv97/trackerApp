import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const Input = ({value, onChangeText, placeholder}) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    alignSelf: 'center',
    marginTop: 55,
  },
});

export default Input;
