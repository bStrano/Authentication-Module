import React, {useCallback, useState} from 'react';
import {NativeModules, Pressable, StyleSheet, View} from 'react-native';
import {
  ButtonWB,
  Divider,
  Text,
  useTheme,
} from 'react-native-stralom-components';
import TextInputRounded from '../../components/TextInputRounded';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';
import GoogleIcon from '../../icons/GoogleIcon';
import SignInMethodsCard from './components/SignInMethodsCard';
import {AccessToken, LoginManager} from 'react-native-fbsdk';
import FacebookIcon from '../../icons/FacebookIcon';
import TwitterIcon from '../../icons/TwitterIcon';
import AuthenticationController from '../../controllers/AuthenticationController';
import AuthView from '../components/AuthView';
import Toast from 'react-native-toast-message';

const {RNTwitterSignIn} = NativeModules;

const initialCredentials = {
  email: '',
  password: '',
};

function LoginScreen({navigation, route}: any) {
  const theme = useTheme();
  const [credentials, setCredentials] = useState(initialCredentials);
  const onSuccess = route.params?.onSuccess;
  const onError = route.params?.onError;

  const styles = stylesheet({});

  const onGoogleSignIn = useCallback(async () => {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }, []);

  const onFacebookSignIn = useCallback(async () => {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );
    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }, []);

  const onTwitterSignIn = useCallback(async () => {
    // Perform the login request
    const {authToken, authTokenSecret} = await RNTwitterSignIn.logIn();
    // Create a Twitter credential with the tokens
    const twitterCredential = auth.TwitterAuthProvider.credential(
      authToken,
      authTokenSecret,
    );
    // Sign-in the user with the credential
    return auth().signInWithCredential(twitterCredential);
  }, []);

  const validateForm = useCallback(async () => {
    if (!credentials.password || !credentials.email) {
      console.log(credentials);
      Toast.show({
        text1: 'Falha ao realizar autenticação',
        text2: 'Verifique o usuário e a senha e tente novamente',
        type: 'error',
        visibilityTime: 8000,
        position: 'bottom',
      });
      return false;
    }
    return true;
  }, [credentials.password, credentials.email]);

  const onStralomSignIn = useCallback(async () => {
    console.log('Starting Stralom Sign In');
    try {
      if (await validateForm()) {
        let data = await AuthenticationController.login(
          credentials.email,
          credentials.password,
        );
        if (onSuccess) {
          onSuccess(data);
        }
        return data;
      }
    } catch (e) {
      console.warn(e);
      if (e.response?.status === 401) {
        Toast.show({
          text1: 'Credenciais invalidas',
          text2: 'Verifique o usuário e a senha e tente novamente.',
          type: 'error',
          visibilityTime: 8000,
          position: 'bottom',
        });
      }
      if (onError) {
        onError(e);
      }
    }
  }, [
    credentials.email,
    credentials.password,
    onError,
    onSuccess,
    validateForm,
  ]);

  return (
    <AuthView>
      <TextInputRounded
        value={credentials.email}
        label={'E-MAIL'}
        autoCompleteType={'email'}
        keyboardType={'email-address'}
        returnKeyType={'next'}
        onChangeText={(email: string) =>
          setCredentials({...credentials, email})
        }
      />
      <TextInputRounded
        value={credentials.password}
        label={'SENHA'}
        isPassword
        autoCompleteType={'password'}
        returnKeyType={'done'}
        onChangeText={(password: string) =>
          setCredentials({...credentials, password})
        }
      />
      <ButtonWB
        label={'ENTRAR'}
        backgroundColor={theme.primary.dark.color}
        onPress={onStralomSignIn}
      />
      <Text variant={'caption'} style={styles.forgotPasswordText}>
        Esqueceu sua senha?
      </Text>

      <View style={{flexDirection: 'row', padding: 20}}>
        <Divider
          width={null}
          style={{
            flex: 1,
            borderWidth: 1,
            borderBottomColor: theme.primary.main.color,
          }}
        />
        <Text variant={'regular'} style={{paddingHorizontal: 10}}>
          Entrar com redes sociais
        </Text>

        <Divider
          width={null}
          style={{
            flex: 1,
            borderWidth: 1,
            borderBottomColor: theme.primary.main.color,
          }}
        />
      </View>

      <View style={styles.socialMediaContainer}>
        <SignInMethodsCard onPress={onGoogleSignIn} icon={<GoogleIcon />} />
        <SignInMethodsCard onPress={onFacebookSignIn} icon={<FacebookIcon />} />
        <SignInMethodsCard onPress={onTwitterSignIn} icon={<TwitterIcon />} />
      </View>

      <Pressable
        onPress={() => navigation.navigate('RegistrationScreen')}
        style={styles.registerContainer}>
        <Text variant={'title'} style={{textAlign: 'center'}}>
          Não possui uma conta ?
          <Text
            variant={'caption'}
            style={{color: theme.primary.dark, fontWeight: 'bold'}}>
            {' '}
            Cadastre-se agora!{' '}
          </Text>
        </Text>
      </Pressable>
    </AuthView>
  );
}

const stylesheet = ({...props}): any =>
  StyleSheet.create({
    registerContainer: {
      justifyContent: 'center',
      padding: 25,
    },
    socialMediaContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    forgotPasswordText: {
      textAlign: 'center',
      paddingVertical: 5,
    },
  });

export default LoginScreen;
