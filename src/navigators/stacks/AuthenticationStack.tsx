import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';
import LoginScreen from "../../screens/Login/LoginScreen";
import RegistrationScreen from "../../screens/Register/RegistrationScreen";


function AuthenticationStack() {
    return (
        <Stack.Navigator initialRouteName={'LoginScreen'}>
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen name="RegistrationScreen" component={RegistrationScreen}/>
        </Stack.Navigator>
    );
}

const Stack = createStackNavigator();

export default AuthenticationStack;
