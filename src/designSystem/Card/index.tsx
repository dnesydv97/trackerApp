import {FC, ReactNode} from 'react';
import styled from 'styled-components';
import {spacing} from '@app/common/theme';
interface CardProps {
  children: ReactNode;
  paddingTop?: keyof typeof spacing;
  paddingBottom?: keyof typeof spacing;
  marginTop?: keyof typeof spacing;
  marginBottom?: keyof typeof spacing;
  paddingHorizontal?: keyof typeof spacing;
  marginHorizontal?: keyof typeof spacing;
  style?: any;
  borderRadius?: keyof typeof spacing;
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
  width?: number;
  height?: number;
  touchable?: boolean;
  onPress?: () => void;
  backgroundColor?: string;
}
const StyleCard = styled.View`
  shadow-color: rgba(0, 0, 0, 0.5);
  elevation: 8;
  background: ${({theme}) => theme.colors.white};
  padding-horizontal: ${({theme, paddingHorizontal}) =>
    theme.spacing[paddingHorizontal] || 0}px;
  padding-top: ${({theme, paddingTop}) => theme.spacing[paddingTop] || 0}px;
  padding-bottom: ${({theme, paddingBottom}) =>
    theme.spacing[paddingBottom] || 0}px;
  margin-top: ${({theme, marginTop}) => theme.spacing[marginTop] || 0}px;
  margin-bottom: ${({theme, marginBottom}) =>
    theme.spacing[marginBottom] || 0}px;
  margin-horizontal: ${({theme, marginHorizontal}) =>
    theme.spacing[marginHorizontal] || 0}px;
  border-radius: ${({borderRadius, theme}) =>
    borderRadius ? theme.spacing[borderRadius] : 0};
  flex-direction: ${({flexDirection}) => flexDirection || 'column'};
  align-items: ${({alignItems}) => alignItems || 'baseline'};
  justify-content: ${({justifyContent}) => justifyContent || 'flex-start'};
  background-color: ${({backgroundColor, theme}) =>
    theme?.colors[backgroundColor || 'white']};
`;
const StyleTouchableCard = styled.TouchableOpacity`
  shadow-color: rgba(0, 0, 0, 0.5);
  elevation: 8;
  background: ${({theme}) => theme.colors.white};
  padding-horizontal: ${({theme, paddingHorizontal}) =>
    theme.spacing[paddingHorizontal] || 0}px;
  padding-top: ${({theme, paddingTop}) => theme.spacing[paddingTop] || 0}px;
  padding-bottom: ${({theme, paddingBottom}) =>
    theme.spacing[paddingBottom] || 0}px;
  margin-top: ${({theme, marginTop}) => theme.spacing[marginTop] || 0}px;
  margin-bottom: ${({theme, marginBottom}) =>
    theme.spacing[marginBottom] || 0}px;
  margin-horizontal: ${({theme, marginHorizontal}) =>
    theme.spacing[marginHorizontal] || 0}px;
  border-radius: ${({borderRadius, theme}) =>
    borderRadius ? theme.spacing[borderRadius] : 0};
  flex-direction: ${({flexDirection}) => flexDirection || 'column'};
  align-items: ${({alignItems}) => alignItems || 'baseline'};
  justify-content: ${({justifyContent}) => justifyContent || 'flex-start'};
  background-color: ${({backgroundColor, theme}) =>
    theme?.colors[backgroundColor || 'white']};
`;
const Card: FC<CardProps> = ({children, onPress, touchable, ...restProps}) => {
  if (touchable) {
    return (
      <StyleTouchableCard onPress={onPress} {...restProps}>
        {children}
      </StyleTouchableCard>
    );
  } else {
    return <StyleCard {...restProps}>{children}</StyleCard>;
  }
};

export default Card;
