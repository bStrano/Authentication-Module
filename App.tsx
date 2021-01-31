import React from 'react';
import AppContainer from "./src/navigators/AppContainer";
import {GoogleSignin} from '@react-native-community/google-signin';
import Toast from 'react-native-toast-message';
import {View} from "react-native";

GoogleSignin.configure();

declare const global: { HermesInternal: null | {} };

const App = () => {
    return (
        <View style={{flex: 1}}>

            <AppContainer/>

            <Toast ref={(ref) => Toast.setRef(ref)}/>
        </View>

    );
};

export default App;
