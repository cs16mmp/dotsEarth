import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import HomeStack from './Screens/HomeStack';
import AWSConnection from './src/practise/AWSconnection';

export default function App() {

  return (

    <SafeAreaView style={styles.container}>
        <AWSConnection></AWSConnection>
        {/* <HomeStack></HomeStack> */}
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
});

