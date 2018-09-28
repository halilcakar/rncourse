import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class SharePlaceScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Share this awesome place!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});

export default SharePlaceScreen;
