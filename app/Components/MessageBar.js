import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, TextInput, KeyboardAvoidingView} from 'react-native';
import SocketIOClient from 'socket.io-client';

const socket = SocketIOClient('http://185.177.21.13:3000');

export default class MessageBar extends Component {
    constructor() {
        super();
        this.state = {
            inputVal: ''
        }
    }

    sendMessage() {
        var value = this.state.inputVal;
        console.log("Value: " + value);
        socket.emit("send message", value);
        this.setState({
            inputVal: ''
        });
    }

    render() {
        return(
            <View style={styles.bottomBar}>
                    <TextInput style={styles.messageInput}
                        underlineColorAndroid='transparent'
                        value={this.state.inputVal}
                        onChangeText={(value) => this.setState({inputVal: value})}
                        placeholder="Enter Message..."
                        onSubmitEditing={(event) => this.sendMessage(event.nativeEvent.text)}
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
        borderColor: 'lightseagreen',
        marginLeft: '5%',
        marginBottom: '15%',
        paddingLeft: '5%'
    }
});

AppRegistry.registerComponent('MessageBar', () => MessageBar);
