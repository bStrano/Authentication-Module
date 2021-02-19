import {SafeAreaView, StatusBar} from 'react-native';
import LottieView from 'lottie-react-native';
import backgroundLogin from '../../assets/animations/backgroundLogin.json';

import React from 'react';

function ImageBackgroundView({children}: any) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar hidden={true} />
      <LottieView
        source={backgroundLogin}
        autoPlay={true}
        loop={true}
        speed={0.7}
        style={{width: '100%', height: '100%', position: 'absolute'}}
        resizeMode={'cover'}
      />
      {children}
    </SafeAreaView>
  );
}

export default ImageBackgroundView;
