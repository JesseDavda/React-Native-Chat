import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import MessageBar from './app/Components/MessageBar';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
            <MessageBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      width: '100%',
      height: '100%',
      backgroundColor: '#f4f4f4'
  },
});

AppRegistry.registerComponent('App', () => App);
