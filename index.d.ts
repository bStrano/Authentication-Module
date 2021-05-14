declare module '*.png';

import LoginScreen from './src/screens/Login/LoginScreen';
import AuthenticationStack from './src/navigators/stacks/AuthenticationStack';
import RegistrationScreen from './src/screens/Register/RegistrationScreen';
import AuthenticationController from './src/controllers/AuthenticationController';
import useAuthentication from './src/hooks/useAuthentication';

interface IUser {
  accessToken: string;
  refreshToken: string;
  email: string;
  id: number;
  name: string;
}

export {LoginScreen, RegistrationScreen, AuthenticationStack, IUser};
export {AuthenticationController};
export {useAuthentication};
