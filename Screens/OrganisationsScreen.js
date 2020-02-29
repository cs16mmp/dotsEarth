import React, { Component } from "react"
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

class OrganisationsScreen extends Component {
    render(){

        return(

            <View style={styles.container}>
            
            <Text>Organisations Screen</Text>

            </View>
        )

    }

}

export default OrganisationsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})