import React, { Component } from "react"
import { View, Image, Text, StyleSheet, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native';
import SmallCardComponent from "./SmallCardComponent";

import database from "../databases/data.json"

var DATA = database;

function _onPress(item){

    console.warn(item.id)

}
const ClinicsCarouselComponent = (props) => {
    return (
        <FlatList
            horizontal={true}
            data={DATA.clinicsItems}
            renderItem={({ item }) => (
                <TouchableHighlight onPress={() => _onPress(item)}>
                    <SmallCardComponent
                        overlayString={item.overlay}
                        titleString={item.title}
                        phoneNumberString={item.phoneNumber}
                        addressString={item.address}
                    />
                </TouchableHighlight>)}
            keyExtractor={item => item.id}
        />
    );
}
export default ClinicsCarouselComponent;

