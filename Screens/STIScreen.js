import React, { Component } from "react"
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

class STIScreen extends Component {
    render(){

        return(

            <View style={styles.container}>
            
            <Text>STIs Screen</Text>

            </View>
        )

    }

}

export default STIScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})