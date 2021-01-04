import React from "react";
import {GestureResponderEvent, Pressable, StyleSheet} from "react-native";
import {useGlobalStyles} from "react-native-stralom-components";
import {useTheme} from "@react-navigation/native";

interface SignInMethodsCardProps {
    onPress: (event: GestureResponderEvent) => void
    icon: JSX.Element
}

function SignInMethodsCard({onPress, icon}: SignInMethodsCardProps) {
    const theme = useTheme();
    const globalStyles = useGlobalStyles();
    console.log(globalStyles)
    const styles = styleSheet({theme, globalStyles})
    return (
        <Pressable onPress={onPress} style={styles.container}>
            {icon}
        </Pressable>
    )
}

const styleSheet = ({theme, globalStyles, ...props}: any) => StyleSheet.create({
        container: {
            ...globalStyles.containerCentered,
            ...globalStyles.card,
            flex: 0, padding: 12, width: 60, height: 48,
            marginHorizontal: 15
        }
    }
)

export default SignInMethodsCard
