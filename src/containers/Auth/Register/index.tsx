import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Header from '../../../common/Header';
import Button from '../../../common/Button';
const Register: React.FC = () => {
  const handleBackPress = () => {
    // Handle back button press event here
  };

  const handleClosePress = () => {
    // Handle close button press event here
  };

  return (
    <View>
      <Header
        title="Back"
        onBackPress={handleBackPress}
        onClosePress={handleClosePress}
      />
      <View style={styles.container}>
        <Text style={styles.register}>Register</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../../images/watch.jpeg')}
            style={styles.watch}
          />
          <Text style={{fontSize: 30, right: 30}}>3 Min</Text>
        </View>
        <Text style={{fontSize: 25, fontWeight: '600'}}>
          Getting started with TYME
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '400',
            marginTop: 10,
            marginBottom: 30,
          }}>
          Register your personal, company and vehicle details under 3 minutes
        </Text>
        <Button title={'Register'} />
        <Button
          title={'REGISTER VIA LINKED IN'}
          backgroundColor="red"
          style={{marginTop: 10}}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: '400',
            marginTop: 20,
            marginBottom: 30,
          }}>
          Chose to register via your Linked In to refill items
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  register: {
    fontWeight: '700',
    fontSize: 30,
    marginTop: 15,
  },
  watch: {
    width: 200,
    height: 200,
  },
});

export default Register;
