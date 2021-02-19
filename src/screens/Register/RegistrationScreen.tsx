import React, {useState} from 'react';
import {Pressable, View} from 'react-native';
import AuthView from '../components/AuthView';
import {ButtonWB, Text, useTheme} from 'react-native-stralom-components';
import TextInputRegister from './components/TextInputRegister';

function RegistrationScreen({navigation}: any) {
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <AuthView>
      <View style={{marginHorizontal: '8%'}}>
        <TextInputRegister
          value={name}
          onChangeText={setName}
          label={'Nome'}
          icon={{name: 'user', class: 'FontAwesome5'}}
        />
        <TextInputRegister
          value={email}
          onChangeText={setEmail}
          label={'E-mail'}
          icon={{name: 'alternate-email', class: 'MaterialIcons'}}
        />
        <TextInputRegister
          value={password}
          onChangeText={setPassword}
          isPassword={true}
          label={'Senha'}
          icon={{name: 'lock', class: 'Entypo'}}
        />
        <TextInputRegister
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          isPassword={true}
          label={'Confirmar senha'}

          icon={{name: 'lock', class: 'Entypo'}}

        />
      </View>

      <ButtonWB
        label={'CADASTRAR'}
        backgroundColor={theme.primary.main}
        customStyles={{container: {marginHorizontal: '3%'}}}
        onPress={() => null}
      />

      <Pressable onPress={() => navigation.goBack()}>
        <Text variant={'subtitle'} style={{textAlign: 'center'}}>
          Já possui uma conta ?
          <Text variant={'caption'} style={{fontWeight: 'bold'}}>
            {' '}
            Entrar agora!{' '}
          </Text>
        </Text>
      </Pressable>
    </AuthView>
  );
}

export default RegistrationScreen;
