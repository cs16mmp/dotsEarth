import React, { Component, useReducer, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import HomeStack from './Screens/HomeStack';

import AWSTEST from './AWSTEST'


export default function App() {
  
  return (

    <SafeAreaView style={styles.container}>
        <HomeStack></HomeStack>

        {/* <AWSTEST></AWSTEST> */}
    </SafeAreaView>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
});

