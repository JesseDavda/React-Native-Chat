import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, TextInput} from 'react-native';

export default class MessageBar extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    sendMessage(value) {
        fetch('http://185.177.21.13:3000/message', {
            method: 'post',
            body: value
        }).then((res) => {
            console.log(res);
        }).catch(e => {
            console.log(e);
        });
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
        )
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
        marginBottom: '5%',
        paddingLeft: '5%'
    }
});

AppRegistry.registerComponent('MessageBar', () => MessageBar);
