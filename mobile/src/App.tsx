import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import AppStack from './routes/AppStck';

const App = () => {
  return (
    <>
      <StatusBar translucent barStyle="light-content" />
      <AppStack />
    </>
  );
};

export default App;
