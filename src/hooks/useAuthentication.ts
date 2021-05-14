import {useCallback} from 'react';
import AuthenticationController from '../controllers/AuthenticationController';
import {AccessToken, LoginManager} from 'react-native-fbsdk';
import Keychain from 'react-native-keychain';
import Toast from 'react-native-toast-message';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';
import {NativeModules} from 'react-native';
import {IUser} from '../../index';
const {RNTwitterSignIn} = NativeModules;

interface ICredentials {
  email: string;
  password: string;
}

function useAuthentication() {
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

  const validateForm = useCallback(async (credentials: ICredentials) => {
    if (!credentials.password || !credentials.email) {
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
  }, []);

  async function onStralomSignIn(
    credentials: ICredentials,
    onError: (error: Error) => void,
    onSuccess: (data: IUser) => void,
  ) {
    console.log('Starting Stralom Sign In');
    try {
      if (await validateForm(credentials)) {
        let data = await AuthenticationController.login(
          credentials.email,
          credentials.password,
        );
        await Keychain.setGenericPassword('token', data.refreshToken);
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
  }

  async function saveRefreshToken(refreshToken: string) {
    await Keychain.setGenericPassword('token', refreshToken);
  }

  async function restoreRefreshToken() {
    const keychain = await Keychain.getGenericPassword();
    if (!keychain) {
      throw new Error('No keys stored');
    }
    return keychain.password;
  }

  async function logout() {
    return await Keychain.resetGenericPassword();
  }

  return {
    onTwitterSignIn,
    onFacebookSignIn,
    onGoogleSignIn,
    onStralomSignIn,
    saveRefreshToken,
    restoreRefreshToken,
    logout,
  };
}

export default useAuthentication;
