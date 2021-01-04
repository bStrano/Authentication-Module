import React from 'react';
import AppContainer from "./src/navigators/AppContainer";
import {GoogleSignin} from '@react-native-community/google-signin';

GoogleSignin.configure();

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
      <AppContainer/>

  );
};

export default App;
