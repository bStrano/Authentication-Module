import ImageBackgroundView from "../../components/AnimationBackgroundView";
import {Image, View} from "react-native";
import React from "react";
import {useTheme} from "react-native-stralom-components";
import stralomLogo from "./../../../assets/images/stralomLogo.png";

interface IAuthViewProps {
    children: Element
}

function AuthView(props: IAuthViewProps) {
    const theme = useTheme();
    return (
        <ImageBackgroundView>
            <View style={{flex: 1, backgroundColor: theme.primary.light + 'CC', justifyContent: 'center'}}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={stralomLogo} style={{width: 120, height: 120, marginVertical: 10}}/>
                </View>

                {props.children}
            </View>
        </ImageBackgroundView>
    )
}

export default AuthView;
