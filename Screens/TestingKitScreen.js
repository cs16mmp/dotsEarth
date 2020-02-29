import React, { Component } from "react"
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

class TestingKitScreen extends Component {
    render(){

        return(

            <View style={styles.container}>
            
            <Text>Testing Screen</Text>

            </View>
        )

    }

}

export default TestingKitScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})