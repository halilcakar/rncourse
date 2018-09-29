import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

class SideDrawer extends Component {
  render() {
    return (
      <View style={[styles.container, { width: Dimensions.get('window').width * 0.8 }]}>
        <Text>Side Drawer</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 22
  }
});

export default SideDrawer;
