import React, { Component } from "react"
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    FlatList,
    ScrollView,
} from 'react-native';
import CardComponent from '../Components/CardComponent'
import database from "../databases/data.json"

var data = JSON.parse(JSON.stringify(database));
var DATA = []
DATA = data.MainMenuItems;


function Item({ overlay, title, description }) {
    return (
        <CardComponent
            overlayString={overlay}
            titleString={title}
            descriptionString={description}
        />
    );
}
const MainMenu = () => {
    return (
        <FlatList
            data={DATA}
            renderItem={({ item }) =>
                <Item
                    overlay={item.overlay}
                    title={item.title}
                    description={item.description}
                />}
            keyExtractor={item => item.id}
        />
    )
}

class HomeScreen extends Component {
    render() {
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
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
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