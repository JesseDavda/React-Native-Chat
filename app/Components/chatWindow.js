import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ScrollView, ListView } from 'react-native';
import SocketIOClient from 'socket.io-client';

const socket = SocketIOClient('http://localhost:3000');

export default class ChatWindow extends Component {
    constructor(props) {
        super(props);

        var messages = [
            {message: "Welcome to Chat!"},
            {message: "Enter your message below: "}
        ];
        
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            messages: ds.cloneWithRows(messages)
        }
    }

    renderMessage(message, sectionId, rowId, highlightRow) {
        socket.on('message', (message) => {
            var newMessage = { message: message };
            var oldMessages = this.state.messages;

            this.setState({ messages: oldMessages.concat(newMessage)});
        });

        return(
            <View style={styles.row}>
                <Text style={styles.rowText}>{message.message}</Text>
            </View>
        );
    }

    render() {
        return(
            <ScrollView>
                <ListView
                    dataSource={this.state.messages}
                    renderRow={this.renderMessage.bind(this)}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#f4f4f4',
        marginBottom: 3
    },
    rowText: {
        flex: 1
    }

});

AppRegistry.registerComponent('ChatWindow', () => ChatWindow);
