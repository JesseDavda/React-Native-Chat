import React, { Component } from 'react';
import {AppRegistry, View, Text, StyleSheet} from 'react-native';

export default class Header extends Component {
    render() {
        return(
                <View style={header.head}>
                    <Text style={header.text}>Welcome to Chat!</Text>
                </View>
        );
    }
}

const header = StyleSheet.create({
    head: {
        height: '15%',
        width: '100%',
        backgroundColor: 'lightseagreen',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        paddingTop: 5
    }
});

AppRegistry.registerComponent('Header', () => Header);
