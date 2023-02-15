import {FC} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import MatrialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import styled from 'styled-components';
interface IconProps {
  name: string;
  size?: number;
  color?: string;
  style?: any;
  onPress?: () => void;
  type?: 'material' | 'fontawesome' | 'fontawesome5';
}
const StyleIcon = styled(Icon)`
  color: ${({theme, color}) => theme.colors?.[color] || theme.colors.primaryTextColor};
`;
const StyleIcon5 = styled(Icon5)`
  color: ${({theme, color}) => theme.colors?.[color] || theme.colors.primaryTextColor};
`;
const StyleMatrialIcon = styled(MatrialIcon)`
  color: ${({theme, color}) => theme.colors?.[color] || theme.colors.primaryTextColor};
`;
const AwesomeIcon: FC<IconProps> = ({name, onPress, size = 12, color, type, ...restProps}) => {
  return (
    <>
      {type === 'material' ? (
        <StyleMatrialIcon name={name} size={size} color={color} {...restProps} onPress={onPress} />
      ) : type == 'fontawesome5' ? (
        <StyleIcon5 name={name} size={size} color={color} {...restProps} onPress={onPress} />
      ) : (
        <StyleIcon name={name} size={size} color={color} {...restProps} onPress={onPress} />
      )}
    </>
  );
};

export default AwesomeIcon;
