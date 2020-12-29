import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthenticationStack from './stacks/AuthenticationStack';

function AppContainer() {
    return (
        <NavigationContainer>
            <AuthenticationStack/>
        </NavigationContainer>
    );
}

export default AppContainer;
