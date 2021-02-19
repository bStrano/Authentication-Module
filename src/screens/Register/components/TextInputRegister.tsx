import {ITextInputWI, TextInputWI, useTheme} from 'react-native-stralom-components';
import React from 'react';

/**
 *
 * @param {string} value
 * @param {function} onChangeText
 * @param {string} label
 * @param {object} props
 * @constructor
 */
interface ITextInputRegister extends ITextInputWI {
  value: string;
  onChangeText: (text: string) => void;
  icon: {name: string; class: string};
  label: string;
  props?: object;
}

function TextInputRegister({
  value,
  onChangeText,
  label,
  icon,
  ...props
}: ITextInputRegister) {
  const theme = useTheme();
  return (
    <TextInputWI
      styles={{
        textInput: {color: 'white'},
        label: {
          color: theme.primary.dark,
          fontFamily: theme.fontFamily.bold,
          fontWeight: 'bold',
          paddingVertical: 2,
          fontSize: 16,
        },
      }}
      iconPasswordColor={'lightgrey'}
      value={value}
      onChangeText={onChangeText}
      icon={{...icon, color: 'white', size: 22}}
      label={label}
      {...props}
    />
  );
}

export default TextInputRegister;
