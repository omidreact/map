import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import MapScreen from './screen/MapScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <MapScreen />
      </SafeAreaView>
    </>
  );
};

export default App;