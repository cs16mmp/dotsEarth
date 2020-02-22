import React, { Component } from "react"
import { View, Image, Text, StyleSheet, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native';
import SmallCardComponent from "./SmallCardComponent";

import database from "../databases/data.json"

var DATA = JSON.parse(JSON.stringify(database));
var clinicsDATA = DATA.Clinics;

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
            data={clinicsDATA}
            renderItem={({ item }) => (
                <TouchableHighlight onPress={() => console.warn("Pressed")}>
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

