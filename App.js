import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions/';
import PlaceInput from './src/components/PlaceInput';
import PlaceList from './src/components/PlaceList';
import PlaceDetail from './src/components/PlaceDetail';

class App extends Component {
  
  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  };

  placeDeletedHandler = () => {
    this.props.onDeletePlace();
  };

  placeSelectHandler = key => {
    this.props.onSelectPlace(key);
  };

  modalCloseHandler = () => {
    this.props.onDeselectPlace();
  };

  render() {
		return (
			<View style={styles.container}>
        <PlaceDetail 
          selectedPlace={this.props.selectedPlace}
          onModalClose={this.modalCloseHandler} 
          onItemDeleted={this.placeDeletedHandler} 
        /> 
				<PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList 
          places={this.props.places} 
          onItemSelected={this.placeSelectHandler} 
        />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 26,
		backgroundColor: '#F5FCFF',
		justifyContent: 'flex-start',
		alignItems: 'center'
	}
});

const mapStateToProps = state => {
  const { places, selectedPlace } = state.places;
  return {
    places, selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: name => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: key => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
