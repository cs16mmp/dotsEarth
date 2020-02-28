import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import HomeStack from './Screens/HomeStack';
import AWSConnection from './src/practise/AWSconnection';
import AWSinput from './src/practise/AWSinput';

export default function App() {

  return (

    <SafeAreaView style={styles.container}>
        {/* <AWSConnection></AWSConnection> */}
        {/* <HomeStack></HomeStack> */}
        <AWSinput></AWSinput>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
});

