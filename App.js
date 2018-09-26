import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput';
import PlaceList from './src/components/PlaceList';

import placeImage from './src/assets/beautiful-place.jpg';

export default class App extends Component {
	state = {
		places: []
	};

	placeAddedHandler = (placeName) => {
		this.setState((prevState) => {
			return {
        places: prevState.places.concat({ 
          key: Math.random(),
          name: placeName, 
          image: placeImage
        })
			};
		});
  };
  
  placeDeletedHandler = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== key;
        })
      };
    });
  };

	render() {
		return (
			<View style={styles.container}>
				<PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList places={this.state.places} onItemDeleted={this.placeDeletedHandler} />
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
