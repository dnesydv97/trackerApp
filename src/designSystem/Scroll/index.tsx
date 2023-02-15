import {FC, ReactNode} from 'react';
import styled from 'styled-components';
interface ScrollProps {
  children?: ReactNode;
  showsVerticalScrollIndicator?: any;
  contentContainerStyle?: any;
  style?: any;
}
const StyleScrollView = styled.ScrollView``;

const Scroll: FC<ScrollProps> = ({children, ...restProps}) => {
  return <StyleScrollView {...restProps}>{children}</StyleScrollView>;
};

export default Scroll;
