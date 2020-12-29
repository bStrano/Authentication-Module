import React from 'react';
import AppContainer from "./src/navigators/AppContainer";

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
      <AppContainer/>

  );
};

export default App;
