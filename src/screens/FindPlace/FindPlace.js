import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import PlaceList from '../../components/PlaceList';

class FindPlaceScreen extends Component {

  itemSelectedHandler = key => {
      const selectedPlace = this.props.places.find((place => place.key === key));
      this.props.navigator.push({
        screen: 'awesome-places.PlaceDetailScreen',
        title: selectedPlace.name,
        passProps: {
          selectedPlace
        }
      });
  };

  render() {
    console.log(this.props.places);
    return (
      <View style={styles.container}>
        <PlaceList
          places={this.props.places}
          onItemSelected={this.itemSelectedHandler}
        />
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
