import {FC, memo, ReactElement, ReactNode} from 'react';
import styled from 'styled-components';
import {spacing} from '../../shared/front/theme';
import Header from '../Header';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import useBackButton from '../../hooks/useBackButton';
import Button from '../Button';

interface HeaderProps {
  title?: string;
  onBackPress?: () => {};
  backButton?: boolean;
  noBack?: boolean;
}
interface BaseProps {
  children?: ReactNode;
  header?: ReactElement | HeaderProps;
  paddingHorizontal?: keyof typeof spacing;
  paddingTop?: keyof typeof spacing;
  paddingBottom?: keyof typeof spacing;
  marginHorizontal?: keyof typeof spacing;
  marginTop?: keyof typeof spacing;
  marginBottom?: keyof typeof spacing;
  withSafeArea?: boolean;
  noBack?: boolean;
  backHandler?: () => void | string;
  footerComponent?: ReactElement;
  footerButton?: any;
}
const StyledBase = styled.View`
  background-color: ${({theme}) => theme.colors.white};
  flex: 1;
  padding-horizontal: ${({theme, paddingHorizontal}) =>
    theme.spacing[paddingHorizontal] || 0}px;
  padding-top: ${({topInset}) => topInset}px;
  padding-bottom: ${({bottomInset}) => bottomInset}px;
  margin-horizontal: ${({theme, marginHorizontal}) =>
    theme.spacing[marginHorizontal] || 0}px;
  margin-top: ${({theme, marginTop}) => theme.spacing[marginTop] || 0}px;
  margin-bottom: ${({theme, marginBottom}) =>
    theme.spacing[marginBottom] || 0}px;
`;

const FooterButtonContainer = styled.View<{bottomInset: number}>`
  padding-horizontal: ${({theme}) => theme.spacing.lg}px;
  padding-top: ${({theme}) => theme.spacing.sm}px;
  padding-bottom: 40;
`;

const Base: FC<BaseProps> = ({
  children,
  header,
  noBack,
  backHandler,
  withSafeArea = true,
  footerButton,
  footerComponent,
  ...restProps
}) => {
  const {top, bottom} = useSafeAreaInsets();
  const {goBack, navigate} = useNavigation();

  useBackButton(
    !noBack &&
      (backHandler
        ? typeof backHandler === 'string'
          ? () => navigate(backHandler)
          : backHandler
        : goBack),
  );
  return (
    <StyledBase {...restProps} topInset={top} bottomInset={bottom}>
      {withSafeArea ? (
        <SafeAreaView style={{flex: 1}}>
          <>
            {header?.title ? <Header {...header} /> : header}
            {children}
          </>
        </SafeAreaView>
      ) : (
        <>
          {header?.title ? <Header {...header} /> : header}
          {children}
        </>
      )}
      {!!footerComponent && footerComponent}
      {!!footerButton && (
        <FooterButtonContainer bottomInset={bottom}>
          <Button {...footerButton} height={50} fontSize="lg" />
        </FooterButtonContainer>
      )}
    </StyledBase>
  );
};

export default memo(Base);
