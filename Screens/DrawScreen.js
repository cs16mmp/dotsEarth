import React, { Component } from "react"
import { View, Image, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { Overlay } from 'react-native-elements';

class DrawScreen {
    render() {
        return (
            <View style={{flex:1}}>
 <Overlay
            isVisible={this.state.isVisible}
            windowBackgroundColor="rgba(255, 255, 255, .5)"
            overlayBackgroundColor="red"
            width="auto"
            height="auto">
            <Text>Hello from Overlay!</Text>
          </Overlay>
            </View>
           
        )
    }

}
export default DrawScreen;