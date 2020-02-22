import React, { Component } from "react"
import { View, Text, StyleSheet, TouchableHighlight, ScrollView, } from 'react-native';


function Item({ id, day, date }) {
    return (

        <View key={id} style={styles.container}>
            <View style={styles.day}>
                <Text style={styles.dayText}>{day}</Text>
            </View>
            <View style={styles.date}>
                <Text style={styles.dateText}>{date}</Text>
            </View>

        </View>

    );
}

const CarouselComponent = (props) => {

    return (
        <ScrollView
            horizontal={true}
            decelerationRate={0}>
            {
                props.items.map(({ date, day, id }) =>
                    (
                        <TouchableHighlight onPress={() => console.warn("pressed")}>
                            <Item
                                id={id}
                                day={day}
                                date={date}
                            />
                        </TouchableHighlight>
                    ))
            }
        </ScrollView>
    );
}
export default CarouselComponent;

const styles = StyleSheet.create({

    container: {
        paddingLeft:16,
        height: 30,
        flexDirection: "column",
    },
    day: {
        flex: 1,
    },
    date: {
        flex: 1,
    },
    dayText: {
        fontSize: 10,
        fontFamily: 'Avenir-book',
        color: '#2C4159',
    },
    dateText: {
        fontSize: 14,
        fontFamily: 'Avenir-Heavy',
        color: '#2C4159',
    }
})
