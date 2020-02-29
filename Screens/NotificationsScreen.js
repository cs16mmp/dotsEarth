import React, { Component } from "react"
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

class NotificationsScreen extends Component {
    render(){

        return(

            <View style={styles.container}>
            
            <Text>Notifications Screen</Text>

            </View>
        )

    }

}

export default NotificationsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})