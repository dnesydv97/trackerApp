import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#3366FF',
    paddingVertical: 10,
    borderRadius: 5,
    width: '80%',
    alignSelf: 'center',
    marginTop: 90,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Button;
