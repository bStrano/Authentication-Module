import React from 'react';
// @ts-ignore
import {ITextInputWI, TextInputWI} from 'react-native-stralom-components';

function TextInputRounded({
  value,
  label,
  onChangeText,
  ...props
}: ITextInputWI) {
  return (
    <TextInputWI
      {...props}
      onChangeText={onChangeText}
      height={40}
      value={value}
      label={label}
      backgroundColor={'#F0F0F064'}
      borderColor={props.borderColor}
      selectionColor={'#231536'}
      styles={{
        textInput: {
          borderRadius: 22,
          paddingHorizontal: 16,
          borderTopRightRadius: props.isPassword ? 0 : 22,
          borderBottomRightRadius: props.isPassword ? 0 : 22,
          backgroundColor: '#F0F0F064',
        },
        container: {
          marginHorizontal: '8%',
          marginVertical: 10,
        },
        label: {
          marginLeft: 12,
        },
      }}
    />
  );
}

export default TextInputRounded;
