import {FC, ReactNode} from 'react';
import styled from 'styled-components';
import {spacing} from '@app/common/theme';

interface RowProps {
  children?: ReactNode;
  touchable?: boolean | undefined;
  paddingTop?: keyof typeof spacing;
  paddingBottom?: keyof typeof spacing;
  marginTop?: keyof typeof spacing;
  marginBottom?: keyof typeof spacing;
  paddingHorizontal?: keyof typeof spacing;
  marginHorizontal?: keyof typeof spacing;
  justifyContent?: string;
  alignItems?: string;
  backgroundColor?: string;
  onPress?: () => void;
  style?: any;
  borderRadius?: keyof typeof spacing;
  activeOpacity?: any;
}
const StyleDiv = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: ${({alignItems}) => alignItems || 'center'};
  justify-content: ${({justifyContent}) => justifyContent || `flex-start`};
  background-color: ${({backgroundColor, theme}) => theme.colors[backgroundColor] || `none`};
  padding-horizontal: ${({theme, paddingHorizontal}) => theme.spacing[paddingHorizontal] || 0}px;
  padding-top: ${({theme, paddingTop}) => theme.spacing[paddingTop] || 0}px;
  padding-bottom: ${({theme, paddingBottom}) => theme.spacing[paddingBottom] || 0}px;
  margin-top: ${({theme, marginTop}) => theme.spacing[marginTop] || 0}px;
  margin-bottom: ${({theme, marginBottom}) => theme.spacing[marginBottom] || 0}px;
  margin-horizontal: ${({theme, marginHorizontal}) => theme.spacing[marginHorizontal] || 0}px;
  background-color: ${({backgroundColor, theme}) => theme.colors[backgroundColor] || `none`};
  border-radius: ${({borderRadius, theme}) => (borderRadius ? theme.spacing[borderRadius] : 0)};
  width: 100%;
`;
const StyleTouchableDiv = styled.TouchableOpacity`
  padding-horizontal: ${({theme, paddingHorizontal}) => theme.spacing[paddingHorizontal] || 0}px;
  padding-top: ${({theme, paddingTop}) => theme.spacing[paddingTop] || 0}px;
  padding-bottom: ${({theme, paddingBottom}) => theme.spacing[paddingBottom] || 0}px;
  margin-top: ${({theme, marginTop}) => theme.spacing[marginTop] || 0}px;
  margin-bottom: ${({theme, marginBottom}) => theme.spacing[marginBottom] || 0}px;
  margin-horizontal: ${({theme, marginHorizontal}) => theme.spacing[marginHorizontal] || 0}px;
  flex-direction: row;
  align-items: ${({alignItems}) => alignItems || 'center'};
  justify-content: ${({justifyContent}) => justifyContent || `flex-start`};
  background-color: ${({backgroundColor, theme}) => theme.colors[backgroundColor] || `none`};
  border-radius: ${({borderRadius, theme}) => (borderRadius ? theme.spacing[borderRadius] : 0)};
  flex-wrap: wrap;'
  width:100%;
`;

const Row: FC<RowProps> = ({children, touchable, onPress, ...restProps}) => {
  if (touchable) {
    return (
      <StyleTouchableDiv onPress={onPress} {...restProps}>
        {children}
      </StyleTouchableDiv>
    );
  } else {
    return <StyleDiv {...restProps}>{children}</StyleDiv>;
  }
};

export default Row;
