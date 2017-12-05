import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ScrollView, ListView } from 'react-native';
import SocketIOClient from 'socket.io-client';

const socket = SocketIOClient('http://185.177.21.13:3000');

export default class ChatWindow extends Component {
    constructor() {
        super();

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var allMessages = ds.cloneWithRows([{message: "Hello welcome to chat"}]);

        this.state = {
            messageSource: allMessages,
            allMessages: allMessages
        }
    }

    componentDidMount() {
        this.getMessage();
    }

    getMessage(message, sectionId, rowId, highlightRow) {
        socket.on('new message', (message) => {
            var newMessage = {message: message};

            var messageData = [];
            messageData = this.state.allMessages;
            console.log(messageData);
            messageData.push(newMessage);
            console.log("added item: " + messageData);

            this.setState({
                messageSource: this.state.messageSource.cloneWithRows(newMessage)
            });
        });
    }

    renderRow(message, sectionId, rowId, highlightRow) {
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
                    dataSource={this.state.messageSource}
                    renderRow={this.renderRow.bind(this)}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        position: 'relative',
        left: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'lightseagreen',
        width: '100%',
        height: 30,
        borderRadius: 5,
        paddingLeft: '5%',
        marginBottom: 3,
        marginTop: 10,
    },
    rowText: {
        flex: 1,
        color: '#fff',
        marginLeft: 5,
    }
});

AppRegistry.registerComponent('ChatWindow', () => ChatWindow);
