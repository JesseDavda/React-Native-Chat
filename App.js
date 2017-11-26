import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import MessageBar from './app/Components/MessageBar';
import ChatWindow from './app/Components/chatWindow';
import Header from './app/Components/Header';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
            <Header />
            <ChatWindow />
            <MessageBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      width: '100%',
      height: '100%',
      backgroundColor: '#f4f4f4',
      alignItems: 'center'
  }
});

AppRegistry.registerComponent('App', () => App);
