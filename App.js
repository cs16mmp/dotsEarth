import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import HomeStack from './Screens/HomeStack';
import AWSpractice from './amplify/backend/AWSpractice';

export default function App() {

  return (

    <SafeAreaView style={styles.container}>
        <AWSpractice></AWSpractice>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
});

