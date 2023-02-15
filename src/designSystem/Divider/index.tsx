import {FC} from 'react';
import styled from 'styled-components';
interface DividerProps {
  color?: string;
  height?: number;
}
const StyleView = styled.View`
  width: 100%;
  height: ${({height}) => height}px;
  background-color: ${({color, theme}) => theme.colors[color]};
`;
const Divider: FC<DividerProps> = ({color = 'primaryTextColor', height = 1}) => {
  return <StyleView height={height} color={color}></StyleView>;
};

export default Divider;
