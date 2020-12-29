import React, {useCallback, useState} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import LottieView from 'lottie-react-native';
import backgroundLogin from './../../assets/animations/backgroundLogin.json';
import {TextInputWI} from 'react-native-stralom-components';

const initialCredentials = {
    email: '',
    password: '',
};

function LoginScreen() {
    const [credentials, setCredentials] = useState(initialCredentials);
    const onLogin = useCallback(() => {
        console.log('teste');
    }, []);

    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar hidden={true}/>
            <LottieView
                source={backgroundLogin}
                autoPlay={true}
                loop={true}
                speed={0.7}
                style={{width: '100%', position: 'absolute'}}
            />
            <View style={{flex: 1, backgroundColor: '#231536CC'}}>
                <TextInputWI
                    onChangeText={(email: string) =>
                        setCredentials({...credentials, email})
                    }
                    height={40}
                    color={'red'}
                    value={credentials.email}
                    label={'E-MAIL'}
                    borderColor={'red'}
                    styles={{
                        textInput: {
                            borderRadius: 22,
                            paddingHorizontal: 16,
                            borderTopRightRadius: 22,
                            borderBottomRightRadius: 22,
                            backgroundColor: '#F0F0F064',
                        },
                        container: {
                            marginHorizontal: '8%',
                        },
                        label: {
                            marginLeft: 12,
                        },
                    }}
                />
                <TextInputWI
                    onChangeText={(email: string) =>
                        setCredentials({...credentials, email})
                    }
                    height={40}
                    color={'red'}
                    value={credentials.email}
                    label={'SENHA'}
                    borderColor={'red'}
                    styles={{
                        textInput: {
                            borderRadius: 22,
                            paddingHorizontal: 16,
                            borderTopRightRadius: 22,
                            borderBottomRightRadius: 22,
                            backgroundColor: '#F0F0F064',
                        },
                        container: {
                            marginHorizontal: '8%',
                        },
                        label: {
                            marginLeft: 12,
                        },
                    }}
                />
            </View>
        </SafeAreaView>
    );
}

export default LoginScreen;
