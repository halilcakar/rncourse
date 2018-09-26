import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput';
import PlaceList from './src/components/PlaceList';

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
          image: {
            uri: 'https://s3-ap-southeast-1.amazonaws.com/storage.propsocial.com/property/pictures/3098715/laman_view-cyberjaya-propsocial-2_EYAh-cSstEyUUC1jPc2d_large.jpg'
          }
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
