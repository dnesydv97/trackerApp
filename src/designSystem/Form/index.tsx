import {FC, useState} from 'react';
import {FormikErrors, FormikTouched, FormikValues} from 'formik';
import Div from '../Div';
import Typography from '../Typography';
import Input from './Input';
import Mask from './Mask';
import {get} from 'lodash';
import {withTheme} from 'styled-components/native';

import {ThemeType} from '@app/utils/theme';
interface FormFieldProps {
  label?: string;
  values: FormikValues;
  fieldKey?: string;
  errors: FormikErrors<FormikValues>;
  touched: FormikTouched<FormikValues>;
  placeholder: string;
  type?: never | 'mask' | 'input' | 'dropdown' | 'checkbox' | 'radioBoxGroup';
  onChangeText?: () => void;
  handleBlur: {
    (e: React.FocusEvent<any>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined,
  ) => Promise<FormikErrors<FormikValues>> | Promise<void>;

  onPress?: (value: any) => void;
  key?: any;
  active?: boolean;
}

const colorGenerator = (props, isBorder = false): ThemeType['colors'] => {
  if (props.isFocused) {
    return 'primary';
  } else if (props.error) {
    return 'danger';
  }
  return isBorder ? 'borderColor' : 'textColor';
};

const testError = (props: any) => {
  if (props.dropdown) {
    return props.errors?.[props.fieldKey] && !!props.submitCount;
  }
  return props.errors?.[props.fieldKey] && (props.touched?.[props.fieldKey] || !!props.submitCount);
};

const FormField: FC<FormFieldProps> = (props, ref?: any) => {
  const [isFocused, setFocus] = useState<boolean>(false);
  const value = get(props.values, props.fieldKey);
  const error = props.errors[props.fieldKey];
  const hasError = testError(props);

  const handleChange = (value: any) => {
    props.setFieldValue(props.fieldKey, value);
    props.onChangeText && props.onChangeText(value);
  };
  const handleBlur = () => props.handleBlur(props.fieldKey);

  const colorGeneratorProps = {
    isFocused,
    error: hasError,
  };
  return (
    <Div marginBottom="lg" style={{alignSelf: 'stretch'}}>
      {props?.label && (
        <Typography
          size="lg"
          title={props.label}
          color={colorGenerator(colorGeneratorProps)}
          style={{marginBottom: 7}}
        />
      )}
      {(!props.type || props.type === 'input') && (
        <Input
          {...props}
          ref={ref}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleFocus={() => setFocus(true)}
          value={value}
          style={props.inputStyle}
        />
      )}
      {props?.type === 'mask' && (
        <Mask
          {...props}
          ref={ref}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleFocus={() => setFocus(true)}
          value={value}
          style={props.inputStyle}
        />
      )}
      {hasError && (
        <Typography
          title={error}
          size="sm"
          color={colorGenerator(colorGeneratorProps)}
          style={{marginBottom: 15}}
        />
      )}
    </Div>
  );
};

export default withTheme(FormField);
