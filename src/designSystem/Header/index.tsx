import React from 'react';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Typography from '../Typography';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const HeaderBox = styled.View`
  flex-direction: row;
  align-items: center;
`;

const BackIcon = styled(Icon)`
  font-size: 20;
  color: ${({theme}) => theme.colors.textColor};
  margin-top: -7;
`;

const IconWrapper = styled.TouchableOpacity`
  z-index: 99999;
  padding: 10px;
  width: 50;
  align-items: center;
`;

type HeaderProps = {
  title: string;
  onBackPress?: () => void;
  rightComponent?: React.ReactElement;
  noBack?: boolean;
};
const Header: React.FC<HeaderProps> = ({onBackPress, title, rightComponent, noBack}) => {
  const {goBack} = useNavigation();

  const handlePress = () => (onBackPress ? onBackPress?.() : goBack());
  return (
    <HeaderBox>
      {!noBack && (
        <IconWrapper onPress={handlePress} activeOpacity={0.9}>
          <BackIcon onPress={handlePress} name={'arrow-left'} />
        </IconWrapper>
      )}
      {!!title && (
        <Typography
          title={title}
          size="1x"
          style={{
            marginLeft: noBack ? 20 : 0,
            maxWidth: width - 60,
            textTransform: 'uppercase',
            fontWeight: '800',
            marginBottom: 15,
            marginTop: 5,
          }}
        />
      )}
      {!!rightComponent && rightComponent}
    </HeaderBox>
  );
};

export default Header;
