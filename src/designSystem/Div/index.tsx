import {FC, ReactNode, memo} from 'react';
import styled from 'styled-components';
import {spacing} from '@app/common/theme';
interface DivProps {
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
  flexDirection?: string;
  backgroundColor?: string;
  onPress?: () => void;
  circle?: boolean | undefined;
  style?: any;
  width?: number;
  height?: number;
  borderRadius?: keyof typeof spacing;
  activeOpacity?: any;
}
const StyleDiv = styled.View`
  padding-horizontal: ${({theme, paddingHorizontal}) => theme.spacing[paddingHorizontal] || 0}px;
  padding-top: ${({theme, paddingTop}) => theme.spacing[paddingTop] || 0}px;
  padding-bottom: ${({theme, paddingBottom}) => theme.spacing[paddingBottom] || 0}px;
  margin-top: ${({theme, marginTop}) => theme.spacing[marginTop] || 0}px;
  margin-bottom: ${({theme, marginBottom}) => theme.spacing[marginBottom] || 0}px;
  margin-horizontal: ${({theme, marginHorizontal}) => theme.spacing[marginHorizontal] || 0}px;
  flex-direction: ${({flexDirection}) => flexDirection || `column`};
  align-items: ${({alignItems}) => alignItems || `baseline`};
  justify-content: ${({justifyContent}) => justifyContent || `flex-start`};
  background-color: ${({backgroundColor, theme}) => theme.colors[backgroundColor] || `none`};
  border-radius: ${({circle, borderRadius, theme}) =>
    circle ? 50 : borderRadius ? theme.spacing[borderRadius] : 0};
`;
const StyleTouchableDiv = styled.TouchableOpacity`
  padding-horizontal: ${({theme, paddingHorizontal}) => theme.spacing[paddingHorizontal] || 0}px;
  padding-top: ${({theme, paddingTop}) => theme.spacing[paddingTop] || 0}px;
  padding-bottom: ${({theme, paddingBottom}) => theme.spacing[paddingBottom] || 0}px;
  margin-top: ${({theme, marginTop}) => theme.spacing[marginTop] || 0}px;
  margin-bottom: ${({theme, marginBottom}) => theme.spacing[marginBottom] || 0}px;
  margin-horizontal: ${({theme, marginHorizontal}) => theme.spacing[marginHorizontal] || 0}px;
  background-color: ${({theme, backgroundColor}) => theme.colors[backgroundColor] || ``};
  flex-direction: ${({flexDirection}) => flexDirection || `column`};
  align-items: ${({alignItems}) => alignItems || `baseline`};
  justify-content: ${({justifyContent}) => justifyContent || `flex-start`};
  border-radius: ${({circle, borderRadius, theme}) =>
    circle ? 50 : borderRadius ? theme.spacing[borderRadius] : 0};
`;
const Div: FC<DivProps> = ({children, touchable, onPress, ...restProps}) => {
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

export default memo(Div);
