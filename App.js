/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './RootNavigation';


import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import HomeScreen from './Screens/HomeScreen'

const App = () => {
  return (

    <NavigationContainer ref={navigationRef}>
      <SafeAreaView style={styles.container}>
        <HomeScreen></HomeScreen>
      </SafeAreaView>


    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
