import React from 'react';
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
            borderColor={'red'}
            styles={{
                textInput: {
                    borderRadius: 22,
                    borderTopRightRadius: 22,
                    borderBottomRightRadius: 22,
                },
                container: {
                    marginHorizontal: '8%',
                },
                label: {
                    marginLeft: 12,
                },
            }}
        />
    );
}

export default TextInputRounded;
