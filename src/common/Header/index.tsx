import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import styled from 'styled-components';

type HeaderProps = {
  title: string;
  onBackPress?: () => void;
  onClosePress?: () => void;
};
const StyleView = styled.View`
  background: white;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height:100px
  shadow-color: #333333;
  shadow-offset: {width: 0, height:0};
  shadow-opacity: 0.5;
  shadow-radius: 5;

  
  
  
`;
const Header: React.FC<HeaderProps> = ({title, onBackPress, onClosePress}) => {
  return (
    <StyleView>
      <View style={{flexDirection: 'row', marginTop: 50}}>
        {onBackPress && (
          <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
            <Image
              source={require('../../images/backarrow.png')}
              style={styles.backArrow}
            />
          </TouchableOpacity>
        )}
        <View style={styles.progressiveLine}>
          <View style={{...styles.progressiveDot, left: 70}} />
          <View style={{...styles.progressiveDot, right: 70}} />
        </View>
        {onClosePress && (
          <TouchableOpacity style={styles.closeButton} onPress={onClosePress}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
        )}
      </View>
    </StyleView>
  );
};

const styles = StyleSheet.create({
  backButton: {
    paddingHorizontal: 8,
  },
  backArrow: {
    width: 24,
    height: 24,
    paddingHorizontal: 20,
  },
  closeButton: {
    paddingHorizontal: 20,
  },
  closeButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  closeButtonImage: {
    width: 24,
    height: 24,
  },
  progressiveLine: {
    marginTop: 10,
    height: 4,
    flex: 1,
    backgroundColor: '#D3D3D3',
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  progressiveDot: {
    width: 20,
    height: 20,
    borderRadius: 60,
    backgroundColor: '#fff',
    marginHorizontal: 2,
    borderWidth: 1,
    position: 'absolute',
  },
});

export default Header;
