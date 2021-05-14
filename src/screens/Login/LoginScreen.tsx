import React, {useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {
  ButtonWB,
  Divider,
  Text,
  useTheme,
} from 'react-native-stralom-components';
import TextInputRounded from '../../components/TextInputRounded';
import GoogleIcon from '../../icons/GoogleIcon';
import SignInMethodsCard from './components/SignInMethodsCard';
import FacebookIcon from '../../icons/FacebookIcon';
import TwitterIcon from '../../icons/TwitterIcon';
import AuthView from '../components/AuthView';
import useAuthentication from '../../hooks/useAuthentication';

const initialCredentials = {
  email: '',
  password: '',
};

function LoginScreen({navigation, route}: any) {
  const theme = useTheme();
  const [credentials, setCredentials] = useState(initialCredentials);
  const onSuccess = route.params?.onSuccess;
  const onError = route.params?.onError;
  const {
    onGoogleSignIn,
    onStralomSignIn,
    onFacebookSignIn,
    onTwitterSignIn,
  } = useAuthentication();

  const styles = stylesheet({});

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
        onPress={() => onStralomSignIn(credentials, onSuccess, onError)}
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
