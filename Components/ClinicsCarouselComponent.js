import React, { Component } from "react"
import { View, Image, Text, StyleSheet, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native';
import SmallCardComponent from "./SmallCardComponent";
import database from "../databases/data.json"

var data = JSON.parse(JSON.stringify(database));
var DATA = []
DATA = data.Clinics;

function Item({ overlay, title, phoneNumber, address }) {
    return (
        <SmallCardComponent
            overlayString={overlay}
            titleString={title}
            phoneNumberString={phoneNumber}
            addressString={address}
        />
    );
}

const ClinicsCarouselComponent = (props) => {
    return (
        <FlatList
            horizontal={true}
            data={DATA}
            renderItem={({ item }) => (
                <TouchableHighlight onPress={() => console.warn("HOLIIII")}>
                    <Item
                        overlay={item.overlay}
                        title={item.title}
                        address={item.address}
                    // phoneNumber={item.phoneNumber}
                    />
                </TouchableHighlight>)}
            keyExtractor={item => item.id}
        />
    );

}
export default ClinicsCarouselComponent;

