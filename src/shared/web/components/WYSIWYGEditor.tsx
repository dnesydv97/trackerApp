import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { ThemeType } from '@/utils/theme';
import { FormikErrors, FormikTouched } from 'formik';
import Error from './Error';

type FieldType = {
  name: string;
  value: any;
};

type MetaType = {
  errors?: FormikErrors<object> | undefined;
  touched?: FormikTouched<object> | undefined;
  setFieldValue: Function;
};

type WYSIWYGEditorType = {
  field: FieldType;
  form: MetaType;
  border?: keyof typeof ThemeType.sizes;
  type?: string;
  placeholder: string;
  background?: string;
};

const WYSIWYGEditor = ({
  field: { name, value },
  form: { errors, touched, setFieldValue },
  border = 'md',
  placeholder,
  type = 'text',
  background = 'white',
}: WYSIWYGEditorType) => {
  const onEditorStateChange = editorState => {
    setFieldValue(name, editorState);
  };
  const hasError = errors && errors[name] && touched && touched[name];

  return (
    <>
      <Editor
        // toolbarHidden
        toolbar={{
          options: ['inline', 'list'],
          inline: {
            options: [
              'bold',
              'italic',
              'underline',
              'strikethrough',
              'superscript',
              'subscript',
            ],
          },
          list: {
            options: ['unordered', 'ordered'],
          },
        }}
        editorState={value}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
        placeholder={placeholder}
        wrapperStyle={{
          minHeight: 100,
        }}
      />
      {hasError && <Error message={errors && errors[name]} />}
    </>
  );
};

export default WYSIWYGEditor;
