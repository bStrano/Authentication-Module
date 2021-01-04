import {StyleSheet} from "react-native";
import {SHADOW} from "react-native-stralom-components";


const card = {
    borderRadius: 8,
    ...SHADOW['5'],
    backgroundColor: 'white'
}

const globalStyles = (theme) => StyleSheet.create({
    containerCentered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    },
    ...card
})

export default globalStyles
