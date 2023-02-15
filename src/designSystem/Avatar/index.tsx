import {FC} from 'react';
import styled from 'styled-components';
import {spacing} from '../../shared/front/theme';
interface AvatarProps {
  source: any;
  width?: number | string;
  height?: number | string;
  resizeMode?: string;
  borderRadius?: keyof typeof spacing;
  style?: any;
  circle?: boolean;
}
const StyleImage = styled.Image`
  width: ${({width}) => width || 'auto'};
  height: ${({height}) => height || 'auto'};
  border-radius: ${({borderRadius, theme, circle}) =>
    circle ? 50 : theme.spacing[borderRadius] || 0};
`;
const Avatar: FC<AvatarProps> = ({source, resizeMode, ...restProps}) => {
  return <StyleImage source={source} {...restProps} resizeMode={resizeMode} />;
};

export default Avatar;
