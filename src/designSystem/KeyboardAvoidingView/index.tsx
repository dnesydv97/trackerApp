import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

const Comp = ({children, isActive}) => {
  if (isActive) {
    return (
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        {children}
      </KeyboardAvoidingView>
    );
  }
  return children;
};

export default Comp;
