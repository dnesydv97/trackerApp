import {FC} from 'react';
import styled from 'styled-components/native';
import {fontSizes} from '@app/common/theme';
interface TypographyProps {
  title: string | number;
  size?: keyof typeof fontSizes;
  fontWeight?: number;
  color?: string;
  style?: any;
  textAlign?: string;
}

const StyleText = styled.Text`
  color: ${({theme, color}) => theme.colors[color] || theme.colors.black};
  font-weight: ${({fontWeight}) => fontWeight || 400};
  font-size: ${({size, theme}) => theme.fontSizes[size] || 18}px;
  text-align: ${({textAlign}) => textAlign || `left`};
`;

const Typography: FC<TypographyProps> = ({title, ...restProps}) => {
  return <StyleText {...restProps}>{title}</StyleText>;
};

export default Typography;
