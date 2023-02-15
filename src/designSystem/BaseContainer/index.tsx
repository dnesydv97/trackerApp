import {memo, FC, ReactNode} from 'react';
import {spacing} from '@app/common/theme';
import styled from 'styled-components';
import {Dimensions} from 'react-native';
const {height} = Dimensions.get('window');
interface BaseContainerProps {
  children?: ReactNode;
  isView?: boolean;
  backgroundColor?: string;
  paddingTop?: keyof typeof spacing;
  paddingBottom?: keyof typeof spacing;
  paddingHorizontal?: keyof typeof spacing;
  marginTop?: keyof typeof spacing;
  marginBottom?: keyof typeof spacing;
  marginHorizontal?: keyof typeof spacing;
  showsVerticalScrollIndicator?: boolean;
  withSafeArea?: boolean;
  contentContainerStyle?: any;
  style?: any;
}
const StyleView = styled.View`
  position: relative;
  height: 100%;
`;
const StyleContentView = styled.View`
  background: ${({theme, backgroundColor}) =>
    backgroundColor === 'none' ? 'none' : theme.colors.primaryBackground};
  padding-top: ${({theme, paddingTop}) => theme.spacing[paddingTop] || 0}px;
  padding-bottom: ${({theme, paddingBottom}) => theme.spacing[paddingBottom] || 0}px;
  padding-horizontal: ${({theme, paddingHorizontal}) => theme.spacing[paddingHorizontal] || 0}px;
  margin-top: ${({theme, marginTop}) => theme.spacing[marginTop] || 0}px;
  margin-bottom: ${({theme, marginBottom}) => theme.spacing[marginBottom] || 50}px;
  margin-horizontal: ${({theme, marginHorizontal}) => theme.spacing[marginHorizontal] || 0}px;
  width: 100%;
  height: 100%;
`;

const StyleContentScrollView = styled.ScrollView`
  background: ${({theme, backgroundColor}) =>
    backgroundColor === 'none' ? 'none' : theme.colors.primaryBackground};
  padding-top: ${({theme, paddingTop}) => theme.spacing[paddingTop] || 0}px;
  padding-bottom: ${({theme, paddingBottom}) => theme.spacing[paddingBottom] || 0}px;
  padding-horizontal: ${({theme, paddingHorizontal}) => theme.spacing[paddingHorizontal] || 0}px;
  margin-top: ${({theme, marginTop}) => theme.spacing[marginTop] || 0}px;
  margin-bottom: ${({theme, marginBottom}) => theme.spacing[marginBottom] || 50}px;
  margin-horizontal: ${({theme, marginHorizontal}) => theme.spacing[marginHorizontal] || 0}px;
  width: 100%;
  height: 100%;
`;

const BaseContainer: FC<BaseContainerProps> = ({
  children,
  isView,
  showsVerticalScrollIndicator = false,
  backgroundColor,
  contentContainerStyle,
  ...restProps
}) => {
  if (isView) {
    return <StyleContentView {...restProps}>{children}</StyleContentView>;
  } else {
    return (
      <StyleView>
        <StyleContentScrollView
          showsVerticalScrollIndicator={showsVerticalScrollIndicator}
          {...restProps}
          contentContainerStyle={{flexGrow: 1, ...contentContainerStyle}}>
          {children}
        </StyleContentScrollView>
      </StyleView>
    );
  }
};

export default memo(BaseContainer);
