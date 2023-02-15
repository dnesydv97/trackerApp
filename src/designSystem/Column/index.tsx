import {Children, FC, ReactNode} from 'react';
import styled from 'styled-components';
import {spacing} from '@app/common/theme';
interface ColumnProps {
  children: ReactNode;
  style?: any;
  paddingTop?: keyof typeof spacing;
  paddingBottom?: keyof typeof spacing;
  marginTop?: keyof typeof spacing;
  marginBottom?: keyof typeof spacing;
  paddingHorizontal?: keyof typeof spacing;
  marginHorizontal?: keyof typeof spacing;
  backgroundColor?: string;
  alignItems?: string;
  justifyContent?: string;
}
const StyleColumnView = styled.View`
  flex-direction: column;
  align-self: stretch;
  flex-wrap: wrap;
  padding-horizontal: ${({theme, paddingHorizontal}) => theme.spacing[paddingHorizontal] || 0}px;
  padding-top: ${({theme, paddingTop}) => theme.spacing[paddingTop] || 0}px;
  padding-bottom: ${({theme, paddingBottom}) => theme.spacing[paddingBottom] || 0}px;
  margin-top: ${({theme, marginTop}) => theme.spacing[marginTop] || 0}px;
  margin-bottom: ${({theme, marginBottom}) => theme.spacing[marginBottom] || 0}px;
  margin-horizontal: ${({theme, marginHorizontal}) => theme.spacing[marginHorizontal] || 0}px;
  background-color: ${({theme, backgroundColor}) => theme.colors[backgroundColor] || ``};
  align-items: ${({alignItems}) => alignItems || `baseline`};
  justify-content: ${({justifyContent}) => justifyContent || `flex-start`};
`;
const Column: FC<ColumnProps> = ({children, ...restProps}) => {
  return <StyleColumnView {...restProps}>{children}</StyleColumnView>;
};

export default Column;
