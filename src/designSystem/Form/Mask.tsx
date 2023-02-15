import {StyledCurrencyInput} from './style';
interface MaskProps {
  value?: any;
  handleChange: (value: any) => void;
  handleBlur: () => void;
  handleFocus: () => void;
  ref?: any;
}
const Mask = ({value, handleBlur, handleChange, handleFocus, ref, ...restProps}: MaskProps) => {
  return (
    <StyledCurrencyInput
      {...restProps}
      value={Number(value)}
      refInput={ref}
      onChangeValue={handleChange}
      placeholderTextColor={restProps.theme.colors.lightTextColor}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

export default Mask;
