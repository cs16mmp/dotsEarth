import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View} from 'react-native';
import HomeStack from './Screens/HomeStack';

export default function App () {
  return (
  
    <SafeAreaView style={styles.container}>
      
     <HomeStack></HomeStack>

    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

