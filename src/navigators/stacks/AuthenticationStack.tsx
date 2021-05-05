// @ts-ignore
import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';
import LoginScreen from '../../screens/Login/LoginScreen';
import RegistrationScreen from '../../screens/Register/RegistrationScreen';

function AuthenticationStack(
  onSuccess: (data: any) => void,
  onError: (e: Error) => void,
) {
  return (
    <Stack.Navigator initialRouteName={'LoginScreen'}>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
        initialParams={{
          onSuccess: (data: any) => onSuccess(data),
          onError: (error: Error) => onError(error),
        }}
      />
      <Stack.Screen
        name="RegistrationScreen"
        component={RegistrationScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

const Stack = createStackNavigator();

export default AuthenticationStack;
