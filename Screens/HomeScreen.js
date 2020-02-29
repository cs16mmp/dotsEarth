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
import CardComponent from '../Components/CardComponent'
import database from "../databases/data.json"


function _onTapItem(item){
    navigation.navigate(item)
}
const MainMenu = () => {
    return (
        <FlatList
            data={database.MainMenuItems}
            renderItem={({ item }) => (
                <TouchableHighlight onPress={() => _onTapItem(item.title)}>
                    <CardComponent
                        overlayString={item.overlay}
                        titleString={item.title}
                        descriptionString={item.description}
                    />
                </TouchableHighlight>)}
            keyExtractor={item => item.id}
        />
    )
}

function HomeScreen ({navigation}){

   this.navigation = navigation

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.titleText}>döts</Text>
                </View>
                <View style={styles.body}>
                    <MainMenu />
                </View>
            </View>
        )  
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white"
    },
    header: {
        paddingLeft: 16,
        maxHeight: 42,
        flex: 1,
    },
    body: {
        flex: 1,
        flexGrow: 1,
        alignSelf: 'stretch',
    },
    titleText: {
        fontSize: 34,
        fontFamily: 'Avenir-Heavy',
        color: '#2C4159',
    },
});