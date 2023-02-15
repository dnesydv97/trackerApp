import React, {FC} from 'react';
import {StyleSheet, Text} from 'react-native';
import styled from 'styled-components';
interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: any;
  disabled?: boolean;
  backgroundColor?: string;
}
const StyleTouchableOpacity = styled.TouchableOpacity`
  padding-top: 10;
  padding-bottom: 10;
  border-radius: 5;
  width: 100%;
  height: 50px;
  alignself: center;
  align-items: center;
  justify-content: center;
  background-color: ${({backgroundColor}) => backgroundColor || '#3366FF'};
`;
const Button: FC<ButtonProps> = ({title, ...restProps}) => {
  return (
    <StyleTouchableOpacity {...restProps}>
      <Text style={styles.buttonText}>{title}</Text>
    </StyleTouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Button;
