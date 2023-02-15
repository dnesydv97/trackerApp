import {FC, ReactNode, ReactElement} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components';
import {spacing} from '../../shared/front/theme';
import {ActivityIndicator} from 'react-native-paper';
import Avatar from '../Avatar';
interface ButtonProps {
  title?: string;
  children?: ReactNode;
  icon?: string | ReactElement;
  iconColor?: string;
  iconSize?: number | undefined;
  fontSize?: keyof typeof spacing;
  loading?: boolean;
  outline?: boolean;
  borderRadius?: keyof typeof spacing;
  onPress?: () => void;
  style?: any;
  height?: number | undefined;
  iconType?: string;
  fullWidth?: boolean;
  paddingHorizontal?: keyof typeof spacing;
  color?: string;
  disabled?: boolean;
}
const StyleButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({theme, outline, color}) =>
    !outline ? theme.colors[color || 'primaryButton'] : 'none'};
  border-width: ${({outline}) => (outline ? 1 : 0)};
  border-color: ${({outline, theme, color}) =>
    outline ? theme.colors[color || 'primaryButton'] : ''};
  padding-horizontal: ${({paddingHorizontal, theme}) =>
    theme.spacing[paddingHorizontal] || '7'}px;
  border-radius: ${({borderRadius, theme}) =>
    theme.spacing[borderRadius || 'xs']}px;
  padding-top: ${({height}) => (height ? height / 2 - 12 : 6)}px;
  padding-bottom: ${({height}) => (height ? height / 2 - 12 : 6)}px;
`;
const StyleButtonTitle = styled.Text`
  color: ${({theme, outline, color}) =>
    outline ? theme.colors[color || 'primaryButton'] : theme.colors.white};
  font-size: ${({fontSize, theme}) => theme.spacing[fontSize] || 12}px;
`;
const StyleIcon = styled(Icon)`
  color: ${({theme, outline, color}) =>
    outline ? theme.colors[color || 'primaryButton'] : theme.colors.white};
  margin-right: 5px;
`;
const Button: FC<ButtonProps> = ({
  children,
  title,
  icon,
  iconSize = 12,
  fontSize = 12,
  loading,
  outline = false,
  onPress,
  iconType,
  style,
  ...restProps
}) => {
  return (
    <StyleButton
      {...restProps}
      outline={outline}
      onPress={onPress}
      style={style}>
      {loading ? (
        <ActivityIndicator size={16} color="white" style={{marginRight: 5}} />
      ) : icon ? (
        <>
          {typeof icon === 'string' && (
            <StyleIcon name={icon} size={iconSize} outline={outline} />
          )}
          {typeof icon === 'number' && (
            <Avatar
              source={icon}
              width={22}
              height={18}
              style={{marginRight: 5}}
              resizeMode="contain"
            />
          )}
        </>
      ) : (
        ''
      )}
      <StyleButtonTitle outline={outline} fontSize={fontSize}>
        {title}
      </StyleButtonTitle>
    </StyleButton>
  );
};
export default Button;
