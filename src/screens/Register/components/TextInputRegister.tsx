import {ITextInputWI, TextInputWI} from "react-native-stralom-components";
import React from "react";

/**
 *
 * @param {string} value
 * @param {function} onChangeText
 * @param {string} label
 * @param {object} props
 * @constructor
 */
interface ITextInputRegister extends ITextInputWI {
    value: string
    onChangeText: (text: string) => void
    icon: { name: string, class: string }
    label: string
    props?: object
}

function TextInputRegister({value, onChangeText, label, icon, ...props}: ITextInputRegister) {
    return <TextInputWI styles={{textInput: {color: "white"}}}
                        iconPasswordColor={"lightgrey"}
                        value={value}
                        onChangeText={onChangeText}
                        icon={{...icon, color: 'white', size: 22}}
                        label={label}
                        {...props}
    />

}

export default TextInputRegister
