import React from 'react';
import StackNavigation from './Navigation/StackNavigation';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import {appColors} from './Constants/Colors';
import {Provider} from 'react-redux';
import store from './Redux/store';

const Stack = createStackNavigator();
const App = () => {
  return (
    <>
      <Provider store={store}>
        <StackNavigation />
        <StatusBar
          // barStyle={'dark-content'}
          backgroundColor={'transparent'}
          translucent
        />
      </Provider>
    </>
  );
};

export default App;
