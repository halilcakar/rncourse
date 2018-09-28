import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import PlaceList from '../../components/PlaceList';

class FindPlaceScreen extends Component {

  render() {
    console.log(this.props.places);
    return (
      <View style={styles.container}>
        <PlaceList places={this.props.places} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});

const mapStateToProps = state => ({
    places: state.places.places
});

export default connect(mapStateToProps)(FindPlaceScreen);
