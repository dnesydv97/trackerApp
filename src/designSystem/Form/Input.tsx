import {StyleTextInput} from './style';
interface InputProps {
  value?: string;
  handleChange: (value: any) => void;
  handleBlur: () => void;
  handleFocus: () => void;
  ref?: any;
  multiline?: boolean;
}
const Input = ({
  value,
  handleChange,
  handleFocus,
  handleBlur,
  ref,
  multiline,
  ...restProps
}: InputProps) => {
  return (
    <StyleTextInput
      {...restProps}
      value={value ? String(value) : ''}
      ref={ref}
      onChangeText={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      multiline={multiline}
      placeholderTextColor={restProps.theme.colors.lightTextColor}
    />
  );
};

export default Input;
