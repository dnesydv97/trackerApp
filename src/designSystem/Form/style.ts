import styled from 'styled-components';
import CurrencyInput from 'react-native-currency-input';

export const StyleTextInput = styled.TextInput`
  color: ${({theme}) => theme.colors.textColor};
  height: 45;
  width: 100%;
  border: 1px solid ${({theme}) => theme.colors.whiteGrey};
  background: ${({theme}) => theme.colors.white};
  padding: 4px 10px;
  text-align-vertical: ${({multiline}) => (multiline ? 'top' : 'center')};
  border-radius: 4px;
`;

export const StyledCurrencyInput = styled(CurrencyInput)`
  color: ${({theme}) => theme.colors.textColor};
  height: 45;
  width: 100%;
  background: ${({theme}) => theme.colors.white};
  padding: 4px 10px;
  border-radius: 4px;
  border: 1px solid ${({theme}) => theme.colors.whiteGrey};
`;
