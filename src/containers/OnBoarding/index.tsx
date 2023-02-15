import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Button from '../../common/Button';
import TextInput from '../../common/textinput';
const OnboardingScreen = ({navigation}) => {
  const [address, setAddress] = useState('');

  const handleContinue = () => {
    navigation.navigate('Maps');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../images/travel.jpg')}
        style={{
          marginTop: 0,
          resizeMode: 'stretch',
          height: '60%',
          width: '100%',
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
        }}
      />
      <TextInput
        value={address}
        onChangeText={text => setAddress(text)}
        placeholder="Enter your address"
      />
      <Button title="Continue" onPress={handleContinue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
  },
});

export default OnboardingScreen;
