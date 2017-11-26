import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, TextInput, KeyboardAvoidingView} from 'react-native';
import SocketIOClient from 'socket.io-client';


export default class MessageBar extends Component {
    constructor() {
        super();
        this.state = {
            value: ''
        }
    }

    sendMessage(value) {

    }

    render() {
        return(
            <View style={styles.bottomBar}>
                    <TextInput style={styles.messageInput}
                        underlineColorAndroid='transparent'
                        placeholder="Enter Message..."
                        onSubmitEditing={(value) => this.sendMessage(value)}
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bottomBar: {
        position: 'absolute',
        alignItems: 'center',
        width: '95%',
        height: '9%',
        bottom: 0,
        left: 0
    },
    messageInput: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
        borderWidth: 3,
        borderColor: '#000',
        marginLeft: '5%',
        marginBottom: '10%',
        paddingLeft: '5%'
    }
});

AppRegistry.registerComponent('MessageBar', () => MessageBar);
