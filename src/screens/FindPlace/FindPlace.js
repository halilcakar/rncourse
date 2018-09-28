import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class FindPlaceScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Find A Place for yourself!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});

export default FindPlaceScreen;
