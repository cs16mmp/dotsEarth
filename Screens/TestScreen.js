import React, { Component } from "react"
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    FlatList,
    ScrollView,
    TouchableHighlight,
} from 'react-native';
import ClinicsCarouselComponent from "../Components/CarouselComponent";


class TestScreen extends Component {
    render(){

        return(

            <View style={styles.container}>
            
               <ClinicsCarouselComponent></ClinicsCarouselComponent>

            </View>
        )

    }

}

export default TestScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})